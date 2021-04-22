import React, { Component } from 'react'
import styles from './Question.module.css'

class Question extends Component {
    render() {
        return (
            <center className={styles.question}>
                <h4 className={styles.text}>{this.props.text}</h4>
            </center>
        )
    }
}

export default Question
