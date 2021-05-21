import React, { Component } from 'react'
import Button from '../../components/Button'
import Segment from '../../components/Segment'
import Option from '../../components/Option'
import Divider from '../../components/Divider'
import Message from '../../components/Message'
import Progress from '../../components/Progress'
import {FaCheckCircle, FaTimesCircle} from 'react-icons/fa'

export class Question extends Component {
    constructor(props) {
        super(props);
        const UsersInput = props.questions.map(() => null);
        const InputLocked = props.questions.map(() => false);
        this.state = {
            CurrentQuestionNumber: 0,
            UsersInput: UsersInput,
            InputLocked: InputLocked
        }

        // ui = [null, null, null, null, null, null]
        // il = [false, false, false, false, false, flase]
        // cqn = 0

        // clickhandler
        // if(il[cqn]===false) ui[cqn]=option;
        // else return;
        
        // submithandler
        // cqn++

        this.ClickHandler = this.ClickHandler.bind(this);
        this.SubmitHandler = this.SubmitHandler.bind(this);
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
            return {UsersInput: arr}
        });
        // console.log(label);
    }

    SubmitHandler(e) {
        this.setState((state, props) => {
            let arr = state.InputLocked;
            arr[state.CurrentQuestionNumber] = true;
            return {InputLocked: arr}
        })
        // const input = this.state.UsersInput[this.state.CurrentQuestionNumber];
        // const answer = this.props.questions[this.state.CurrentQuestionNumber].answer;
    }

    GoToNextQuestion() {
        if(this.state.CurrentQuestionNumber >= this.props.questions.length-1) return;
        this.setState((state, props) => {
            return {CurrentQuestionNumber: state.CurrentQuestionNumber + 1}
        })
    }

    GoToPreviousQuestion() {
        if(this.state.CurrentQuestionNumber <= 0) return;
        this.setState((state, props) => {
            return {CurrentQuestionNumber: state.CurrentQuestionNumber - 1}
        })
    }

    render() {
        const cqn = this.state.CurrentQuestionNumber;
        const question = this.props.questions[cqn];
        const totalQuestions = this.props.questions.length;
        const isInputLocked = this.state.InputLocked[cqn];
        const usersInput = this.state.UsersInput[cqn];
        return (
            <Segment raised>
                <div className='font-size-large font-weight-large'>
                    {`Question ${cqn+1} / ${totalQuestions}`}
                </div>
                <Progress width={`${(cqn+1)/totalQuestions*100}%`} size='tiny' />
                <h4>{question.statement}</h4>
                <small className='text-primary'>Choose one correct answer.</small>
                <div>
                    {question.options.map((option, index) => {
                        return (
                            <Option 
                                light={
                                    !isInputLocked ? 
                                    (usersInput===option.id?false:true) :
                                    (!(usersInput===option.id) && !(option.id===question.answer.id) ? true : false)
                                }
                                dark={usersInput===option.id?true:false} 
                                success={(isInputLocked && question.answer.id===option.id)?true:false}
                                danger={(isInputLocked && (usersInput===option.id) && !(question.answer.id===option.id)) ? true : false}
                                key={option.id} 
                                hover={isInputLocked?false:true}
                                onClick={(event) => {
                                    if(isInputLocked) return false;
                                    return this.ClickHandler(event, option);
                                }}
                            >
                                <span className='mr-medium'>{`${option.id}.`}</span>
                                <span>{option.value}</span>
                                <span className='float-right'>
                                    {
                                        (   
                                            isInputLocked && 
                                            usersInput===option.id && 
                                            !(option.id===question.answer.id)
                                        ) ? (
                                            <FaTimesCircle style={{color: '#842029'}} />
                                        ) : (
                                            <FaCheckCircle
                                                style={{
                                                    color: `${
                                                        (isInputLocked) ? (
                                                            (usersInput===option.id) ? (
                                                                (option.id===question.answer.id) ? '#0f5132' : '#842029'
                                                            ) : (
                                                                (option.id===question.answer.id) ? '#0f5132' : '#a6a6a6'
                                                            ) 
                                                        )
                                                        : (
                                                            usersInput===option.id?'#084298':'#a6a6a6'
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

                {(!isInputLocked) ? (
                    <Button 
                        disabled={usersInput===null?true:false} 
                        block primary type="button" onClick={this.SubmitHandler}
                    >
                        Check Your Answer
                    </Button>
                ) : (
                    <></>
                )}
                
                {(isInputLocked) ? (
                    <>
                        <Message 
                            positive={(usersInput===question.answer.id) ? true : false}
                            negative={(usersInput===question.answer.id) ? false : true}
                        >
                            <div className='font-size-large font-weight-bolder align-center'>
                                {
                                    (usersInput===question.answer.id) ? (
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
                            <p>{question.comment}</p>
                        </Message>
                        <Button className='float-left' primary small style={{display: `${cqn===0?'none':'inline-block'}`}} type='button' onClick={this.GoToPreviousQuestion}>
                            Previous Question
                        </Button>
                        <Button className='float-right' primary small style={{display: `${cqn===(totalQuestions-1)?'none':'inline-block'}`}} type='button' onClick={this.GoToNextQuestion}>
                            Next Question
                        </Button>
                    </>
                ) : (
                    <></>
                )}
            </Segment>
        )
    }
}

export default Question
