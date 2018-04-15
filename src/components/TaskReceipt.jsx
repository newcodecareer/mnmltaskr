import React, { Component } from 'react'
import { Modal, Button, Header, Segment, Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { solveTotalFees } from './custom/FeeSolver'
import { format } from 'date-fns'

class TaskReceipt extends Component {
  componentDidMount () {
    const { taskId, fetchSingleTaskReceipt } = this.props
    fetchSingleTaskReceipt(taskId)
  }

  render () {
    let { taskReceipt } = this.props

    let totalFees = {}
    if (taskReceipt) {
      totalFees = solveTotalFees(taskReceipt.approved)
      console.log(taskReceipt)
    }

    return (
      <Modal open basic dimmer='blurring' size='small'>
        <Modal.Content>
          <Header inverted>We hope you enjoyed doing you task!</Header>
          { taskReceipt &&
          <Segment vertical>
            <Segment inverted clearing color='blue'>
              <Header inverted floated='left'>
                <Header.Subheader>TOTAL PAYMENT</Header.Subheader>
                <Header.Content>&#8369; {totalFees.totalPayment}</Header.Content>
              </Header>
              <Header inverted floated='right'>
                <Header.Subheader>Transaction start</Header.Subheader>
                <Header.Content>
                  {format(taskReceipt.transactionStart, 'MMM D, YYYY | hh:mm:ssa')}
                </Header.Content>
                <br/>
                <Header.Subheader>Transaction end</Header.Subheader>
                <Header.Content>
                  {format(taskReceipt.transactionEnd, 'MMM D, YYYY | hh:mm:ssa')}
                </Header.Content>
              </Header>
            </Segment>
            <Table color='blue'>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Tasker</Table.HeaderCell>
                  <Table.HeaderCell>Tasker fee</Table.HeaderCell>
                  <Table.HeaderCell>Mnmtasker profit</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                { taskReceipt.approved.map((tasker, index) => (
                  <Table.Row key={tasker.taskerId}>
                    <Table.Cell>{taskReceipt.names[index]}</Table.Cell>
                    <Table.Cell>&#8369; {tasker.fee}</Table.Cell>
                    <Table.Cell>&#8369; {tasker.profit}</Table.Cell>
                  </Table.Row>
                ))}
                <Table.Row>
                  <Table.Cell textAlign='right'>Total fee and profit</Table.Cell>
                  <Table.Cell positive>&#8369; {totalFees.totalFee}</Table.Cell>
                  <Table.Cell positive>&#8369; {totalFees.totalProfit}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell colSpan='2' textAlign='right'>Total payment</Table.Cell>
                  <Table.Cell positive>&#8369; {totalFees.totalPayment}</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            <Segment inverted>
              <div>Taskee: {taskReceipt.taskeeName}</div>
              <div>Task status: {taskReceipt.status}</div>
            </Segment>
          </Segment>
          }
          <Button as={Link} to='/my-tasks' basic inverted size='mini'>Go back</Button>
        </Modal.Content>
      </Modal>
    )
  }
}

export default TaskReceipt
