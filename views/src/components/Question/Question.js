import React, { Component } from 'react'
import styles from './Question.module.css'

class Question extends Component {
    render() {
        return (
            <center className={styles.question}>
                <h5 className={styles.text}>What to invest in now?</h5>
            </center>
        )
    }
}

export default Question
