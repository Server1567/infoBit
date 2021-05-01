import React, { Component } from 'react'
import styles from './Question.module.css'

class Question extends Component {
    render() {
        return (
            <center className={styles.question} id={this.props.id}>
                <h5 className={styles.text}>{this.props.text}</h5>
            </center>
        )
    }
}

export default Question
