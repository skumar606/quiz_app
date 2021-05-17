import React, { Component } from 'react'
import Button from '../../components/Button'
import Segment from '../../components/Segment'
import Option from '../../components/Option'
import Divider from '../../components/Divider'
import Message from '../../components/Message'
import Progress from '../../components/Progress'
import {FaCheckCircle, FaAngleDoubleRight, FaAngleDoubleLeft, FaTimesCircle} from "react-icons/fa";

export class Question extends Component {
    constructor(props) {
        super(props);
        const UsersInput = props.questions.map(() => null);
        const InputLocked = props.questions.map(() => false);
        this.state = {
            InputLocked: InputLocked,
            UsersInput: UsersInput,
            CurrentQuestionNumber: 0
        }
        this.SubmitHandler = this.SubmitHandler.bind(this);
        this.ClickHandler = this.ClickHandler.bind(this);
        this.GoToNextQuestion = this.GoToNextQuestion.bind(this);
        this.GoToPreviousQuestion = this.GoToPreviousQuestion.bind(this);
    }

    ClickHandler(event, option) {
        event.stopPropagation();
        let label = event.target.closest('label');
        if(!label) return;
        this.setState((state, props) => {
            let arr = state.UsersInput;
            arr[state.CurrentQuestionNumber] = option.id;
            return {
                UsersInput: arr
            }
        });
        // console.log(label);
        // console.log(option);
    }

    SubmitHandler(e) {
        this.setState((state, props) => {
            let arr = state.InputLocked;
            arr[state.CurrentQuestionNumber] = true;
            return {
                InputLocked: arr
            }
        }, () => {
            console.log(this.state.UsersInput);
            console.log(this.state.InputLocked);
        })
        // const input = this.state.UsersInput[this.state.CurrentQuestionNumber];
        // const answer = this.props.questions[this.state.CurrentQuestionNumber].answer;
        // if(input===answer.id) {
        //     console.log('Correct Answer');
        // } else {
        //     console.log('Wrong Answer');
        // }
        // console.log(input);
    }

    GoToNextQuestion() {
        if(this.state.CurrentQuestionNumber >= 5) {
            return;
        }
        this.setState((state, props) => {
            return {
                CurrentQuestionNumber: state.CurrentQuestionNumber + 1,

            }
        })
    }

    GoToPreviousQuestion() {
        if(this.state.CurrentQuestionNumber <= 0) {
            return;
        }
        this.setState((state, props) => {
            return {
                CurrentQuestionNumber: state.CurrentQuestionNumber - 1
            }
        })
    }

    render() {
        const question = this.props.questions[this.state.CurrentQuestionNumber];
        const numberOfQuestions = this.props.questions.length;
        return (
            <Segment raised>
                <div className='font-size-large font-weight-large'>
                    {`Question ${this.state.CurrentQuestionNumber+1} / ${numberOfQuestions}`}
                </div>
                <Progress width={`${(this.state.CurrentQuestionNumber+1)/numberOfQuestions*100}%`} size='tiny' />
                <h4>{question.statement}</h4>
                <small className='text-primary'>Choose one correct answer.</small>
                <div>
                    {question.options.map((option, index) => {
                        return (
                            <Option 
                                light={
                                    (!this.state.InputLocked[this.state.CurrentQuestionNumber]) ?(
                                        this.state.UsersInput[this.state.CurrentQuestionNumber]===option.id?false:true
                                    )
                                    : (
                                        !(this.state.UsersInput[this.state.CurrentQuestionNumber]===option.id) && !(option.id===question.answer.id) ? true : false
                                    )
                                }
                                dark={this.state.UsersInput[this.state.CurrentQuestionNumber]===option.id?true:false} 
                                success={(this.state.InputLocked[this.state.CurrentQuestionNumber] && question.answer.id===option.id)?true:false}
                                danger={(this.state.InputLocked[this.state.CurrentQuestionNumber] && (this.state.UsersInput[this.state.CurrentQuestionNumber]===option.id) && !(question.answer.id===option.id)) ? true : false}
                                key={option.id} 
                                hover={this.state.InputLocked[this.state.CurrentQuestionNumber]?false:true}
                                onClick={(event) => {
                                    if(this.state.InputLocked[this.state.CurrentQuestionNumber]) return false;
                                    return this.ClickHandler(event, option);
                                }}
                            >
                                <span className='mr-medium'>{`${option.id}.`}</span>
                                <span>{option.value}</span>
                                <span className='float-right'>
                                    {
                                        (this.state.InputLocked[this.state.CurrentQuestionNumber] && this.state.UsersInput[this.state.CurrentQuestionNumber]===option.id && !(option.id===question.answer.id)) ? (
                                            <FaTimesCircle 
                                                style={{
                                                    color: '#842029'
                                                }}
                                            />
                                        ) : (
                                            <FaCheckCircle
                                                style={{
                                                    color: `${
                                                        (this.state.InputLocked[this.state.CurrentQuestionNumber]) ? (
                                                            (this.state.UsersInput[this.state.CurrentQuestionNumber]===option.id) ? (
                                                                (option.id===question.answer.id) ? '#0f5132' : '#842029'
                                                            ) : (
                                                                (option.id===question.answer.id) ? '#0f5132' : '#a6a6a6'
                                                            ) 
                                                        )
                                                        : (
                                                            this.state.UsersInput[this.state.CurrentQuestionNumber]===option.id?'#084298':'#a6a6a6'
                                                        )
                                                    }`
                                                }}
                                            />
                                        )
                                    }
                                </span>
                            </Option>
                        );
                    })}
                </div>

                <Divider invisible/>

                {(!this.state.InputLocked[this.state.CurrentQuestionNumber]) ? (
                    <Button 
                        disabled={this.state.UsersInput[this.state.CurrentQuestionNumber]===null?true:false} 
                        block 
                        primary
                        type="button"
                        onClick={this.SubmitHandler}
                    >
                        Check Your Answer
                    </Button>
                ) : (
                    <></>
                )}
                
                {(this.state.InputLocked[this.state.CurrentQuestionNumber]) ? (
                    <>
                        <Message 
                            positive={(this.state.UsersInput[this.state.CurrentQuestionNumber]===question.answer.id) ? true : false}
                            negative={(this.state.UsersInput[this.state.CurrentQuestionNumber]===question.answer.id) ? false : true}
                        >
                            <div className='font-size-large font-weight-bolder align-center'>
                                {
                                    (this.state.UsersInput[this.state.CurrentQuestionNumber]===question.answer.id) ? (
                                        <span>
                                            <span>Correct Answer</span>
                                            <span role='img' aria-label='slightly smiling face' className='ml-medium'>🙂</span>
                                        </span>
                                    ) : (
                                        <span>
                                            <span>Incorrect Answer</span>
                                            <span role='img' aria-label='slightly frowning face' className='ml-medium'>🙁</span>
                                        </span>
                                    )
                                }
                            </div>
                            <div>
                                <p>{question.comment}</p>
                            </div>
                        </Message>
                        <div>
                            <Button className='float-left' primary small style={{display: `${this.state.CurrentQuestionNumber===0?'none':'inline-block'}`}} type='button' onClick={this.GoToPreviousQuestion}>
                                <FaAngleDoubleLeft className='mr-medium' />
                                <span>Previous Question</span>
                            </Button>
                            <Button className='float-right' primary small style={{display: `${this.state.CurrentQuestionNumber===(this.props.questions.length-1)?'none':'inline-block'}`}} type='button' onClick={this.GoToNextQuestion}>
                                <span>Next Question</span>
                                <FaAngleDoubleRight className='ml-medium' />
                            </Button>
                        </div>
                    </>
                ) : (
                    <></>
                )}
            </Segment>
        )
    }
}

export default Question
