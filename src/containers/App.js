import React, {Component} from 'react'
import './App.css';
import logo from './KVI Logo.png';
import { value } from '../components/statementFiles.js'
import 'tachyons';


class App extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      statements: value,
      currentSlide: 1,
      statementsSelected: new Array(24).fill(0),
      buttonSelected: new Array(24).fill(0),
      statementsByCount: new Array(64).fill(0),
      statementsSelectedThreeTimes: [],
      statementsSelectedTwoTimes: [],
      statementsSelectedOneTime: [],
      highestPriorityStatementWithThree: [],
      priorityCountWithThree: 0,
      highestPriorityStatementWithTwo: [],
      priorityCountWithTwo: 0,
      levelForStatementSelectedOnce: [],
      outputResult: [],
      buttonOne: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
      buttonTwo: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
      buttonThree: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
      buttonFour: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
      buttonFive: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
      buttonSix: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
      buttonSeven: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
      buttonEight: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6"
    }

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

  }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
      }

    handleFirstNameChange(event){
      this.setState({firstName: event.target.value});
    }

    handleLastNameChange(event){
      this.setState({lastName: event.target.value});
    }

    handleSubmit(event) {
      event.preventDefault();
      if(this.state.email !== '' && this.state.firstName !== '' && this.state.lastName !== ''){
      document.getElementById('statementSelections').style.display = 'initial';
      document.getElementById('nextButton').style.display = 'initial';
      document.getElementById('previousButton').style.display = 'initial';
      document.getElementById('previousButton').style.visibility = 'hidden';
      document.getElementById('guide1').style.display = 'inherit';
      document.getElementById('emailForm').style.display = 'none';
      document.getElementById('introGuide').style.display = 'none';
      document.getElementById('title').innerHTML = 'KVI: Slide ' + String(this.state.currentSlide) + ' of 27';
      document.getElementById('logo').style.display = 'none';


      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      }

    }



  previousButtonClicked = () => {
    if(this.state.currentSlide === 2){
      document.getElementById('previousButton').style.visibility = 'hidden';
    }

    if(this.state.currentSlide >= 1 && this.state.currentSlide <= 24){
      if(this.state.buttonSelected[this.state.currentSlide - 2] === 1){
        this.setState({currentSlide: this.state.currentSlide - 1,
          buttonOne: "tl btn btn-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
          buttonTwo: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
          buttonThree: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
          buttonFour: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
          buttonFive: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
          buttonSix: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
          buttonSeven: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
          buttonEight: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6"}, () =>{
          document.getElementById('title').innerHTML = 'KVI: Slide ' + String(this.state.currentSlide) + ' of 27';
          })

        } else if (this.state.buttonSelected[this.state.currentSlide - 2] === 2) {
          this.setState({currentSlide: this.state.currentSlide - 1,
            buttonOne: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
            buttonTwo: "tl btn btn-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
            buttonThree: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
            buttonFour: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
            buttonFive: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
            buttonSix: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
            buttonSeven: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
            buttonEight: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6"}, () =>{
document.getElementById('title').innerHTML = 'KVI: Slide ' + String(this.state.currentSlide) + ' of 27';
})

        } else if (this.state.buttonSelected[this.state.currentSlide - 2] === 3) {
          this.setState({currentSlide: this.state.currentSlide - 1,
            buttonOne: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
            buttonTwo: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
            buttonThree: "tl btn btn-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
            buttonFour: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
            buttonFive: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
            buttonSix: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
            buttonSeven: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
            buttonEight: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6"}, () =>{
document.getElementById('title').innerHTML = 'KVI: Slide ' + String(this.state.currentSlide) + ' of 27';
})

        } else if (this.state.buttonSelected[this.state.currentSlide - 2] === 4) {
          this.setState({currentSlide: this.state.currentSlide - 1,
            buttonOne: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
            buttonTwo: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
            buttonThree: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
            buttonFour: "tl btn btn-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
            buttonFive: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
            buttonSix: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
            buttonSeven: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
            buttonEight: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6"}, () =>{
document.getElementById('title').innerHTML = 'KVI: Slide ' + String(this.state.currentSlide) + ' of 27';
})

        } else if (this.state.buttonSelected[this.state.currentSlide - 2] === 5) {
          this.setState({currentSlide: this.state.currentSlide - 1,
            buttonOne: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
            buttonTwo: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
            buttonThree: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
            buttonFour: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
            buttonFive: "tl btn btn-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
            buttonSix: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
            buttonSeven: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
            buttonEight: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6"}, () =>{
document.getElementById('title').innerHTML = 'KVI: Slide ' + String(this.state.currentSlide) + ' of 27';
})

        } else if (this.state.buttonSelected[this.state.currentSlide - 2] === 6) {
          this.setState({currentSlide: this.state.currentSlide - 1,
            buttonOne: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
            buttonTwo: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
            buttonThree: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
            buttonFour: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
            buttonFive: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
            buttonSix: "tl btn btn-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
            buttonSeven: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
            buttonEight: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6"}, () =>{
document.getElementById('title').innerHTML = 'KVI: Slide ' + String(this.state.currentSlide) + ' of 27';
})

        } else if (this.state.buttonSelected[this.state.currentSlide - 2] === 7) {
          this.setState({currentSlide: this.state.currentSlide - 1,
            buttonOne: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
            buttonTwo: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
            buttonThree: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
            buttonFour: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
            buttonFive: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
            buttonSix: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
            buttonSeven: "tl btn btn-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
            buttonEight: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6"}, () =>{
document.getElementById('title').innerHTML = 'KVI: Slide ' + String(this.state.currentSlide) + ' of 27';
})

        } else if (this.state.buttonSelected[this.state.currentSlide - 2] === 8) {
          this.setState({currentSlide: this.state.currentSlide - 1,
            buttonOne: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
            buttonTwo: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
            buttonThree: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
            buttonFour: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
            buttonFive: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
            buttonSix: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
            buttonSeven: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
            buttonEight: "tl btn btn-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6"}, () =>{
document.getElementById('title').innerHTML = 'KVI: Slide ' + String(this.state.currentSlide) + ' of 27';
})

        }
      } else if(this.state.currentSlide === 26){
        document.getElementById('button25').style.display = 'none';
        document.getElementById('button26').style.display = 'none';
        document.getElementById('button27').style.display = 'none';
        document.getElementById('button28').style.display = 'none';
        document.getElementById('button29').style.display = 'none';
        document.getElementById('button30').style.display = 'none';
        document.getElementById('button31').style.display = 'none';
        document.getElementById('button32').style.display = 'none';
        document.getElementById('button33').style.display = 'none';
        document.getElementById('button34').style.display = 'none';
        document.getElementById('button35').style.display = 'none';
        document.getElementById('button36').style.display = 'none';
        document.getElementById('button37').style.display = 'none';
        document.getElementById('button38').style.display = 'none';
        document.getElementById('button39').style.display = 'none';
        document.getElementById('button40').style.display = 'none';
        document.getElementById('button41').style.display = 'none';
        document.getElementById('button42').style.display = 'none';
        document.getElementById('button43').style.display = 'none';
        document.getElementById('button44').style.display = 'none';
        document.getElementById('button45').style.display = 'none';
        document.getElementById('button46').style.display = 'none';
        document.getElementById('button47').style.display = 'none';
        document.getElementById('button48').style.display = 'none';
        document.getElementById('resetWithTwo').style.display = 'none';
        document.getElementById('previousButton').style.visibility = 'hidden';

        this.setState({currentSlide: this.state.currentSlide - 1}, () =>{
document.getElementById('title').innerHTML = 'KVI: Slide ' + String(this.state.currentSlide) + ' of 27';
})

        if(this.state.statementsSelectedThreeTimes.length <= 1){
          document.getElementById('guide2').innerHTML = 'Click Next';

          if(this.state.statementsSelectedThreeTimes.length === 1){
            const tempThreeTimesSelectedArray = this.state.highestPriorityStatementWithThree;
            tempThreeTimesSelectedArray.push(this.state.statementsSelectedThreeTimes[0]);
            this.setState({highestPriorityStatementWithThree: tempThreeTimesSelectedArray})
          }
        } else {

          document.getElementById('guide2').innerHTML = 'Rank the statements by clicking those that are the highest priority to you in order';

        if(this.state.statementsSelectedThreeTimes.length > 1){
          document.getElementById('button9').innerHTML = this.state.statements[this.state.statementsSelectedThreeTimes[0]].name;
          document.getElementById('button9').style.display = 'inherit';
          document.getElementById('button11').innerHTML = this.state.statements[this.state.statementsSelectedThreeTimes[1]].name;
          document.getElementById('button11').style.display = 'inherit';
        }

        if (this.state.statementsSelectedThreeTimes.length > 2){
          document.getElementById('button13').innerHTML = this.state.statements[this.state.statementsSelectedThreeTimes[2]].name;
          document.getElementById('button13').style.display = 'inherit';
        }

        if(this.state.statementsSelectedThreeTimes.length > 3){
          document.getElementById('button15').innerHTML = this.state.statements[this.state.statementsSelectedThreeTimes[3]].name;
          document.getElementById('button15').style.display = 'inherit';
        }
        if(this.state.statementsSelectedThreeTimes.length > 4){
          document.getElementById('button17').innerHTML = this.state.statements[this.state.statementsSelectedThreeTimes[4]].name;
          document.getElementById('button17').style.display = 'inherit';
        }
        if(this.state.statementsSelectedThreeTimes.length > 5){
          document.getElementById('button19').innerHTML = this.state.statements[this.state.statementsSelectedThreeTimes[5]].name;
          document.getElementById('button19').style.display = 'inherit';
        }
        if(this.state.statementsSelectedThreeTimes.length > 6){
          document.getElementById('button21').innerHTML = this.state.statements[this.state.statementsSelectedThreeTimes[6]].name;
          document.getElementById('button21').style.display = 'inherit';
        }
        if(this.state.statementsSelectedThreeTimes.length > 7){
          document.getElementById('button23').innerHTML = this.state.statements[this.state.statementsSelectedThreeTimes[7]].name;
          document.getElementById('button23').style.display = 'inherit';
        }

        if(this.state.priorityCountWithThree > 1){
          document.getElementById('resetWithThree').style.display = 'inherit';
          document.getElementById('button10').style.display = 'inherit';
          document.getElementById('button12').style.display = 'inherit';

          if(this.state.statementsSelectedThreeTimes.length > 2){
            document.getElementById('button14').style.display = 'inherit';
          }
          if(this.state.statementsSelectedThreeTimes.length > 3){
            document.getElementById('button16').style.display = 'inherit';
          }
          if(this.state.statementsSelectedThreeTimes.length > 4){
            document.getElementById('button18').style.display = 'inherit';
          }
          if(this.state.statementsSelectedThreeTimes.length > 5){
            document.getElementById('button20').style.display = 'inherit';
          }
          if(this.state.statementsSelectedThreeTimes.length > 6){
            document.getElementById('button22').style.display = 'inherit';
          }
          if(this.state.statementsSelectedThreeTimes.length > 7){
            document.getElementById('button24').style.display = 'inherit';
          }
        }
      }
    }

        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

  }

  nextButtonClicked = () => {

    if(this.state.currentSlide < 25 && this.state.statementsSelected[this.state.currentSlide - 1] === 0){
      alert('Please Select An Answer!')
    } else {
      if(this.state.currentSlide === 1){
        document.getElementById('previousButton').style.visibility = 'visible';
      }
      if(this.state.currentSlide < 24){
        if(this.state.buttonSelected[this.state.currentSlide] === 0){
          this.setState({currentSlide: this.state.currentSlide + 1,
            buttonOne: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
            buttonTwo: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
            buttonThree: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
            buttonFour: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
            buttonFive: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
            buttonSix: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
            buttonSeven: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
            buttonEight: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6"}, () =>{
document.getElementById('title').innerHTML = 'KVI: Slide ' + String(this.state.currentSlide) + ' of 27';
})
        } else if(this.state.buttonSelected[this.state.currentSlide] === 1){
          this.setState({currentSlide: this.state.currentSlide + 1,
            buttonOne: "tl btn btn-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
            buttonTwo: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
            buttonThree: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
            buttonFour: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
            buttonFive: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
            buttonSix: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
            buttonSeven: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
            buttonEight: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6"}, () =>{
document.getElementById('title').innerHTML = 'KVI: Slide ' + String(this.state.currentSlide) + ' of 27';
})
          } else if (this.state.buttonSelected[this.state.currentSlide] === 2) {
            this.setState({currentSlide: this.state.currentSlide + 1,
              buttonOne: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
              buttonTwo: "tl btn btn-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
              buttonThree: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
              buttonFour: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
              buttonFive: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
              buttonSix: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
              buttonSeven: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
              buttonEight: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6"}, () =>{
document.getElementById('title').innerHTML = 'KVI: Slide ' + String(this.state.currentSlide) + ' of 27';
})
          } else if (this.state.buttonSelected[this.state.currentSlide] === 3) {
            this.setState({currentSlide: this.state.currentSlide + 1,
              buttonOne: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
              buttonTwo: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
              buttonThree: "tl btn btn-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
              buttonFour: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
              buttonFive: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
              buttonSix: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
              buttonSeven: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
              buttonEight: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6"}, () =>{
document.getElementById('title').innerHTML = 'KVI: Slide ' + String(this.state.currentSlide) + ' of 27';
})
          } else if (this.state.buttonSelected[this.state.currentSlide] === 4) {
            this.setState({currentSlide: this.state.currentSlide + 1,
              buttonOne: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
              buttonTwo: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
              buttonThree: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
              buttonFour: "tl btn btn-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
              buttonFive: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
              buttonSix: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
              buttonSeven: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
              buttonEight: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6"}, () =>{
document.getElementById('title').innerHTML = 'KVI: Slide ' + String(this.state.currentSlide) + ' of 27';
})
          } else if (this.state.buttonSelected[this.state.currentSlide] === 5) {
            this.setState({currentSlide: this.state.currentSlide + 1,
              buttonOne: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
              buttonTwo: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
              buttonThree: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
              buttonFour: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
              buttonFive: "tl btn btn-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
              buttonSix: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
              buttonSeven: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
              buttonEight: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6"}, () =>{
document.getElementById('title').innerHTML = 'KVI: Slide ' + String(this.state.currentSlide) + ' of 27';
})
          } else if (this.state.buttonSelected[this.state.currentSlide] === 6) {
            this.setState({currentSlide: this.state.currentSlide + 1,
              buttonOne: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
              buttonTwo: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
              buttonThree: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
              buttonFour: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
              buttonFive: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
              buttonSix: "tl btn btn-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
              buttonSeven: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
              buttonEight: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6"}, () =>{
document.getElementById('title').innerHTML = 'KVI: Slide ' + String(this.state.currentSlide) + ' of 27';
})
          } else if (this.state.buttonSelected[this.state.currentSlide] === 7) {
            this.setState({currentSlide: this.state.currentSlide + 1,
              buttonOne: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
              buttonTwo: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
              buttonThree: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
              buttonFour: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
              buttonFive: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
              buttonSix: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
              buttonSeven: "tl btn btn-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
              buttonEight: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6"}, () =>{
document.getElementById('title').innerHTML = 'KVI: Slide ' + String(this.state.currentSlide) + ' of 27';
})
          } else if (this.state.buttonSelected[this.state.currentSlide] === 8) {
            this.setState({currentSlide: this.state.currentSlide + 1,
              buttonOne: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
              buttonTwo: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
              buttonThree: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
              buttonFour: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
              buttonFive: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
              buttonSix: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
              buttonSeven: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
              buttonEight: "tl btn btn-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6"}, () =>{
document.getElementById('title').innerHTML = 'KVI: Slide ' + String(this.state.currentSlide) + ' of 27';
})
          }

        } else if(this.state.currentSlide === 24){

          const tempArray = this.state.statementsByCount;

          for(let i = 0; i < this.state.statementsSelected.length; i++){
            tempArray[this.state.statementsSelected[i] - 1] = tempArray[this.state.statementsSelected[i] - 1] + 1;
          }


        document.getElementById('statementSelections').style.display = 'none';
        document.getElementById('previousButton').style.visibility = 'hidden';
        document.getElementById('guide1').style.display = 'none';

        const tempOneTimeArray = this.state.statementsSelectedOneTime
        const tempTwoTimesArray = this.state.statementsSelectedTwoTimes
        const tempThreeTimesArray = this.state.statementsSelectedThreeTimes
        const tempOneTimeArraylevel = this.state.levelForStatementSelectedOnce

        for(let i = 0; i < tempArray.length; i++){
          if(tempArray[i] === 1){
            tempOneTimeArray.push(i);
            tempOneTimeArraylevel.push('Low');
          } else if(tempArray[i] === 2){
            tempTwoTimesArray.push(i);
          } else if(tempArray[i] === 3){
            tempThreeTimesArray.push(i);
          }
        }

        this.setState({statementsByCount: tempArray,
                       statementsSelectedOneTime: tempOneTimeArray,
                       statementsSelectedTwoTimes: tempTwoTimesArray,
                       statementsSelectedThreeTimes: tempThreeTimesArray,
                       levelForStatementSelectedOnce: tempOneTimeArraylevel,
                       currentSlide: this.state.currentSlide + 1
                       }, () =>{
document.getElementById('title').innerHTML = 'KVI: Slide ' + String(this.state.currentSlide) + ' of 27';
})

        document.getElementById('guide2').style.display = 'inherit';

        if(this.state.statementsSelectedThreeTimes.length <= 1){
          document.getElementById('guide2').innerHTML = 'Click Next';
          if(this.state.statementsSelectedThreeTimes.length === 1){
            const tempThreeTimesSelectedArray = this.state.highestPriorityStatementWithThree;
            tempThreeTimesSelectedArray.push(this.state.statementsSelectedThreeTimes[0]);
            this.setState({highestPriorityStatementWithThree: tempThreeTimesSelectedArray})
          }
        } else {

          document.getElementById('guide2').innerHTML = 'Rank the statements by clicking those that are the highest priority to you in order';

        if(this.state.statementsSelectedThreeTimes.length > 1){
          document.getElementById('button9').innerHTML = this.state.statements[this.state.statementsSelectedThreeTimes[0]].name;
          document.getElementById('button9').style.display = 'inherit';
          document.getElementById('button11').innerHTML = this.state.statements[this.state.statementsSelectedThreeTimes[1]].name;
          document.getElementById('button11').style.display = 'inherit';
        }

        if (this.state.statementsSelectedThreeTimes.length > 2){
          document.getElementById('button13').innerHTML = this.state.statements[this.state.statementsSelectedThreeTimes[2]].name;
          document.getElementById('button13').style.display = 'inherit';
        }

        if(this.state.statementsSelectedThreeTimes.length > 3){
          document.getElementById('button15').innerHTML = this.state.statements[this.state.statementsSelectedThreeTimes[3]].name;
          document.getElementById('button15').style.display = 'inherit';
        }
        if(this.state.statementsSelectedThreeTimes.length > 4){
          document.getElementById('button17').innerHTML = this.state.statements[this.state.statementsSelectedThreeTimes[4]].name;
          document.getElementById('button17').style.display = 'inherit';
        }
        if(this.state.statementsSelectedThreeTimes.length > 5){
          document.getElementById('button19').innerHTML = this.state.statements[this.state.statementsSelectedThreeTimes[5]].name;
          document.getElementById('button19').style.display = 'inherit';
        }
        if(this.state.statementsSelectedThreeTimes.length > 6){
          document.getElementById('button21').innerHTML = this.state.statements[this.state.statementsSelectedThreeTimes[6]].name;
          document.getElementById('button21').style.display = 'inherit';
        }
        if(this.state.statementsSelectedThreeTimes.length > 7){
          document.getElementById('button23').innerHTML = this.state.statements[this.state.statementsSelectedThreeTimes[7]].name;
          document.getElementById('button23').style.display = 'inherit';
        }
      }


    } else if(this.state.currentSlide === 25){
      if(this.state.priorityCountWithThree === this.state.statementsSelectedThreeTimes.length || this.state.statementsSelectedThreeTimes.length === 0 || this.state.statementsSelectedThreeTimes.length === 1){
      document.getElementById('button9').style.display = 'none';
      document.getElementById('button10').style.display = 'none';
      document.getElementById('button11').style.display = 'none';
      document.getElementById('button12').style.display = 'none';
      document.getElementById('button13').style.display = 'none';
      document.getElementById('button14').style.display = 'none';
      document.getElementById('button15').style.display = 'none';
      document.getElementById('button16').style.display = 'none';
      document.getElementById('button17').style.display = 'none';
      document.getElementById('button18').style.display = 'none';
      document.getElementById('button19').style.display = 'none';
      document.getElementById('button20').style.display = 'none';
      document.getElementById('button21').style.display = 'none';
      document.getElementById('button22').style.display = 'none';
      document.getElementById('button23').style.display = 'none';
      document.getElementById('button24').style.display = 'none';
      document.getElementById('resetWithThree').style.display = 'none';
      document.getElementById('previousButton').style.visibility = 'visible';


      this.setState({currentSlide: this.state.currentSlide + 1}, () =>{
document.getElementById('title').innerHTML = 'KVI: Slide ' + String(this.state.currentSlide) + ' of 27';
})


      if(this.state.statementsSelectedTwoTimes.length <= 1){
        document.getElementById('guide2').innerHTML = 'Click Next';
        if(this.state.statementsSelectedTwoTimes.length === 1){
          const tempTwoTimesSelectedArray = this.state.highestPriorityStatementWithTwo;
          tempTwoTimesSelectedArray.push(this.state.statementsSelectedTwoTimes[0]);
          this.setState({highestPriorityStatementWithTwo: tempTwoTimesSelectedArray})
        }
      } else {

      document.getElementById('guide2').innerHTML = 'Rank the statements by clicking those that are the highest priority to you in order';

      if(this.state.statementsSelectedTwoTimes.length > 1){
        document.getElementById('button25').innerHTML = this.state.statements[this.state.statementsSelectedTwoTimes[0]].name;
        document.getElementById('button25').style.display = 'inherit';
        document.getElementById('button27').innerHTML = this.state.statements[this.state.statementsSelectedTwoTimes[1]].name;
        document.getElementById('button27').style.display = 'inherit';
      }

      if (this.state.statementsSelectedTwoTimes.length > 2){
        document.getElementById('button29').innerHTML = this.state.statements[this.state.statementsSelectedTwoTimes[2]].name;
        document.getElementById('button29').style.display = 'inherit';
      }

      if(this.state.statementsSelectedTwoTimes.length > 3){
        document.getElementById('button31').innerHTML = this.state.statements[this.state.statementsSelectedTwoTimes[3]].name;
        document.getElementById('button31').style.display = 'inherit';
      }
      if(this.state.statementsSelectedTwoTimes.length > 4){
        document.getElementById('button33').innerHTML = this.state.statements[this.state.statementsSelectedTwoTimes[4]].name;
        document.getElementById('button33').style.display = 'inherit';
      }
      if(this.state.statementsSelectedTwoTimes.length > 5){
        document.getElementById('button35').innerHTML = this.state.statements[this.state.statementsSelectedTwoTimes[5]].name;
        document.getElementById('button35').style.display = 'inherit';
      }
      if(this.state.statementsSelectedTwoTimes.length > 6){
        document.getElementById('button37').innerHTML = this.state.statements[this.state.statementsSelectedTwoTimes[6]].name;
        document.getElementById('button37').style.display = 'inherit';
      }
      if(this.state.statementsSelectedTwoTimes.length > 7){
        document.getElementById('button39').innerHTML = this.state.statements[this.state.statementsSelectedTwoTimes[7]].name;
        document.getElementById('button39').style.display = 'inherit';
      }
      if(this.state.statementsSelectedTwoTimes.length > 8){
        document.getElementById('button41').innerHTML = this.state.statements[this.state.statementsSelectedTwoTimes[8]].name;
        document.getElementById('button41').style.display = 'inherit';
      }
      if(this.state.statementsSelectedTwoTimes.length > 9){
        document.getElementById('button43').innerHTML = this.state.statements[this.state.statementsSelectedTwoTimes[9]].name;
        document.getElementById('button43').style.display = 'inherit';
      }
      if(this.state.statementsSelectedTwoTimes.length > 10){
        document.getElementById('button45').innerHTML = this.state.statements[this.state.statementsSelectedTwoTimes[10]].name;
        document.getElementById('button45').style.display = 'inherit';
      }
      if(this.state.statementsSelectedTwoTimes.length > 11){
        document.getElementById('button47').innerHTML = this.state.statements[this.state.statementsSelectedTwoTimes[11]].name;
        document.getElementById('button47').style.display = 'inherit';
      }

      if(this.state.priorityCountWithTwo > 1){
        document.getElementById('resetWithTwo').style.display = 'inherit';
        document.getElementById('button26').style.display = 'inherit';
        document.getElementById('button28').style.display = 'inherit';

        if(this.state.statementsSelectedTwoTimes.length > 2){
          document.getElementById('button30').style.display = 'inherit';
        }
        if(this.state.statementsSelectedTwoTimes.length > 3){
          document.getElementById('button32').style.display = 'inherit';
        }
        if(this.state.statementsSelectedTwoTimes.length > 4){
          document.getElementById('button34').style.display = 'inherit';
        }
        if(this.state.statementsSelectedTwoTimes.length > 5){
          document.getElementById('button36').style.display = 'inherit';
        }
        if(this.state.statementsSelectedTwoTimes.length > 6){
          document.getElementById('button38').style.display = 'inherit';
        }
        if(this.state.statementsSelectedTwoTimes.length > 7){
          document.getElementById('button40').style.display = 'inherit';
        }
        if(this.state.statementsSelectedTwoTimes.length > 8){
          document.getElementById('button42').style.display = 'inherit';
        }
        if(this.state.statementsSelectedTwoTimes.length > 9){
          document.getElementById('button44').style.display = 'inherit';
        }
        if(this.state.statementsSelectedTwoTimes.length > 10){
          document.getElementById('button46').style.display = 'inherit';
        }
        if(this.state.statementsSelectedTwoTimes.length > 11){
          document.getElementById('button48').style.display = 'inherit';
        }
      }
    }
  } else{
    alert('Please follow the instructions on the page')
  }
  } else if(this.state.currentSlide === 26){
    if(this.state.priorityCountWithTwo === this.state.statementsSelectedTwoTimes.length || this.state.statementsSelectedTwoTimes.length === 0 || this.state.statementsSelectedTwoTimes.length === 1 ){

    this.setState({currentSlide: this.state.currentSlide + 1}, () =>{
document.getElementById('title').innerHTML = 'KVI: Slide ' + String(this.state.currentSlide) + ' of 27';
})

    document.getElementById('button25').style.display = 'none';
    document.getElementById('button26').style.display = 'none';
    document.getElementById('button27').style.display = 'none';
    document.getElementById('button28').style.display = 'none';
    document.getElementById('button29').style.display = 'none';
    document.getElementById('button30').style.display = 'none';
    document.getElementById('button31').style.display = 'none';
    document.getElementById('button32').style.display = 'none';
    document.getElementById('button33').style.display = 'none';
    document.getElementById('button34').style.display = 'none';
    document.getElementById('button35').style.display = 'none';
    document.getElementById('button36').style.display = 'none';
    document.getElementById('button37').style.display = 'none';
    document.getElementById('button38').style.display = 'none';
    document.getElementById('button39').style.display = 'none';
    document.getElementById('button40').style.display = 'none';
    document.getElementById('button41').style.display = 'none';
    document.getElementById('button42').style.display = 'none';
    document.getElementById('button43').style.display = 'none';
    document.getElementById('button44').style.display = 'none';
    document.getElementById('button45').style.display = 'none';
    document.getElementById('button46').style.display = 'none';
    document.getElementById('button47').style.display = 'none';
    document.getElementById('button48').style.display = 'none';
    document.getElementById('resetWithTwo').style.display = 'none';
    document.getElementById('previousButton').style.visibility = 'hidden';
    document.getElementById('nextButton').innerHTML ='Submit';

    document.getElementById('guide2').innerHTML = 'Please appropriately elevate the priority of the statements by clicking';

    if(this.state.statementsSelectedOneTime.length > 1){
      document.getElementById('button49').innerHTML = this.state.statements[this.state.statementsSelectedOneTime[0]].name;
      document.getElementById('button49').style.display = 'inherit';
      document.getElementById('button50').style.display = 'inherit';
      document.getElementById('button50').innerHTML = this.state.levelForStatementSelectedOnce[0];
      document.getElementById('button51').innerHTML = this.state.statements[this.state.statementsSelectedOneTime[1]].name;
      document.getElementById('button51').style.display = 'inherit';
      document.getElementById('button52').style.display = 'inherit';
      document.getElementById('button52').innerHTML = this.state.levelForStatementSelectedOnce[1];
    }

    if (this.state.statementsSelectedOneTime.length > 2){
      document.getElementById('button53').innerHTML = this.state.statements[this.state.statementsSelectedOneTime[2]].name;
      document.getElementById('button53').style.display = 'inherit';
      document.getElementById('button54').style.display = 'inherit';
      document.getElementById('button54').innerHTML = this.state.levelForStatementSelectedOnce[2];
    }

    if(this.state.statementsSelectedOneTime.length > 3){
      document.getElementById('button55').innerHTML = this.state.statements[this.state.statementsSelectedOneTime[3]].name;
      document.getElementById('button55').style.display = 'inherit';
      document.getElementById('button56').style.display = 'inherit';
      document.getElementById('button56').innerHTML = this.state.levelForStatementSelectedOnce[3];
    }
    if(this.state.statementsSelectedOneTime.length > 4){
      document.getElementById('button57').innerHTML = this.state.statements[this.state.statementsSelectedOneTime[4]].name;
      document.getElementById('button57').style.display = 'inherit';
      document.getElementById('button58').style.display = 'inherit';
      document.getElementById('button58').innerHTML = this.state.levelForStatementSelectedOnce[4];
    }
    if(this.state.statementsSelectedOneTime.length > 5){
      document.getElementById('button59').innerHTML = this.state.statements[this.state.statementsSelectedOneTime[5]].name;
      document.getElementById('button59').style.display = 'inherit';
      document.getElementById('button60').style.display = 'inherit';
      document.getElementById('button60').innerHTML = this.state.levelForStatementSelectedOnce[5];
    }
    if(this.state.statementsSelectedOneTime.length > 6){
      document.getElementById('button61').innerHTML = this.state.statements[this.state.statementsSelectedOneTime[6]].name;
      document.getElementById('button61').style.display = 'inherit';
      document.getElementById('button62').style.display = 'inherit';
      document.getElementById('button62').innerHTML = this.state.levelForStatementSelectedOnce[6];
    }
    if(this.state.statementsSelectedOneTime.length > 7){
      document.getElementById('button63').innerHTML = this.state.statements[this.state.statementsSelectedOneTime[7]].name;
      document.getElementById('button63').style.display = 'inherit';
      document.getElementById('button64').style.display = 'inherit';
      document.getElementById('button64').innerHTML = this.state.levelForStatementSelectedOnce[7];
    }
    if(this.state.statementsSelectedOneTime.length > 8){
      document.getElementById('button65').innerHTML = this.state.statements[this.state.statementsSelectedOneTime[8]].name;
      document.getElementById('button65').style.display = 'inherit';
      document.getElementById('button66').style.display = 'inherit';
      document.getElementById('button66').innerHTML = this.state.levelForStatementSelectedOnce[8];
    }
    if(this.state.statementsSelectedOneTime.length > 9){
      document.getElementById('button67').innerHTML = this.state.statements[this.state.statementsSelectedOneTime[9]].name;
      document.getElementById('button67').style.display = 'inherit';
      document.getElementById('button68').style.display = 'inherit';
      document.getElementById('button68').innerHTML = this.state.levelForStatementSelectedOnce[9];
    }
    if(this.state.statementsSelectedOneTime.length > 10){
      document.getElementById('button69').innerHTML = this.state.statements[this.state.statementsSelectedOneTime[10]].name;
      document.getElementById('button69').style.display = 'inherit';
      document.getElementById('button70').style.display = 'inherit';
      document.getElementById('button70').innerHTML = this.state.levelForStatementSelectedOnce[10];
    }
    if(this.state.statementsSelectedOneTime.length > 11){
      document.getElementById('button71').innerHTML = this.state.statements[this.state.statementsSelectedOneTime[11]].name;
      document.getElementById('button71').style.display = 'inherit';
      document.getElementById('button72').style.display = 'inherit';
      document.getElementById('button72').innerHTML = this.state.levelForStatementSelectedOnce[11];
    }
    if(this.state.statementsSelectedOneTime.length > 12){
      document.getElementById('button73').innerHTML = this.state.statements[this.state.statementsSelectedOneTime[12]].name;
      document.getElementById('button73').style.display = 'inherit';
      document.getElementById('button74').style.display = 'inherit';
      document.getElementById('button74').innerHTML = this.state.levelForStatementSelectedOnce[12];
    }
    if(this.state.statementsSelectedOneTime.length > 13){
      document.getElementById('button75').innerHTML = this.state.statements[this.state.statementsSelectedOneTime[13]].name;
      document.getElementById('button75').style.display = 'inherit';
      document.getElementById('button76').style.display = 'inherit';
      document.getElementById('button76').innerHTML = this.state.levelForStatementSelectedOnce[13];
    }
    if(this.state.statementsSelectedOneTime.length > 14){
      document.getElementById('button77').innerHTML = this.state.statements[this.state.statementsSelectedOneTime[14]].name;
      document.getElementById('button77').style.display = 'inherit';
      document.getElementById('button78').style.display = 'inherit';
      document.getElementById('button78').innerHTML = this.state.levelForStatementSelectedOnce[14];
    }
    if(this.state.statementsSelectedOneTime.length > 15){
      document.getElementById('button79').innerHTML = this.state.statements[this.state.statementsSelectedOneTime[15]].name;
      document.getElementById('button79').style.display = 'inherit';
      document.getElementById('button80').style.display = 'inherit';
      document.getElementById('button80').innerHTML = this.state.levelForStatementSelectedOnce[15];
    }
    if(this.state.statementsSelectedOneTime.length > 16){
      document.getElementById('button81').innerHTML = this.state.statements[this.state.statementsSelectedOneTime[16]].name;
      document.getElementById('button81').style.display = 'inherit';
      document.getElementById('button82').style.display = 'inherit';
      document.getElementById('button82').innerHTML = this.state.levelForStatementSelectedOnce[16];
    }
    if(this.state.statementsSelectedOneTime.length > 17){
      document.getElementById('button83').innerHTML = this.state.statements[this.state.statementsSelectedOneTime[17]].name;
      document.getElementById('button83').style.display = 'inherit';
      document.getElementById('button84').style.display = 'inherit';
      document.getElementById('button84').innerHTML = this.state.levelForStatementSelectedOnce[17];
    }
    if(this.state.statementsSelectedOneTime.length > 18){
      document.getElementById('button85').innerHTML = this.state.statements[this.state.statementsSelectedOneTime[18]].name;
      document.getElementById('button85').style.display = 'inherit';
      document.getElementById('button86').style.display = 'inherit';
      document.getElementById('button86').innerHTML = this.state.levelForStatementSelectedOnce[18];
    }
    if(this.state.statementsSelectedOneTime.length > 19){
      document.getElementById('button87').innerHTML = this.state.statements[this.state.statementsSelectedOneTime[19]].name;
      document.getElementById('button87').style.display = 'inherit';
      document.getElementById('button88').style.display = 'inherit';
      document.getElementById('button88').innerHTML = this.state.levelForStatementSelectedOnce[19];
    }
    if(this.state.statementsSelectedOneTime.length > 20){
      document.getElementById('button89').innerHTML = this.state.statements[this.state.statementsSelectedOneTime[20]].name;
      document.getElementById('button89').style.display = 'inherit';
      document.getElementById('button90').style.display = 'inherit';
      document.getElementById('button90').innerHTML = this.state.levelForStatementSelectedOnce[20];
    }
    if(this.state.statementsSelectedOneTime.length > 21){
      document.getElementById('button91').innerHTML = this.state.statements[this.state.statementsSelectedOneTime[21]].name;
      document.getElementById('button91').style.display = 'inherit';
      document.getElementById('button92').style.display = 'inherit';
      document.getElementById('button92').innerHTML = this.state.levelForStatementSelectedOnce[21];
    }
    if(this.state.statementsSelectedOneTime.length > 22){
      document.getElementById('button93').innerHTML = this.state.statements[this.state.statementsSelectedOneTime[22]].name;
      document.getElementById('button93').style.display = 'inherit';
      document.getElementById('button94').style.display = 'inherit';
      document.getElementById('button94').innerHTML = this.state.levelForStatementSelectedOnce[22];
    }
    if(this.state.statementsSelectedOneTime.length > 23){
      document.getElementById('button95').innerHTML = this.state.statements[this.state.statementsSelectedOneTime[23]].name;
      document.getElementById('button95').style.display = 'inherit';
      document.getElementById('button96').style.display = 'inherit';
      document.getElementById('button96').innerHTML = this.state.levelForStatementSelectedOnce[23];
    }
  } else{
    alert('Please follow the instructions on the page')
  }
  } else if(this.state.currentSlide === 27){
        document.getElementById('nextButton').style.display = 'none';
        document.getElementById('priorityPart').style.display = 'none';
        document.getElementById('title').innerHTML = 'KVI';
        document.getElementById('guide2').innerHTML = '';

        const tempOutputResult = this.state.outputResult;

        for(let i = 0; i < this.state.highestPriorityStatementWithThree.length; i++){
          tempOutputResult.push({
            id: this.state.highestPriorityStatementWithThree[i] + 1,
            timesSelected: 3,
            ranking: i + 1,
            priority: null,
          })
        }

        for(let i = 0; i < this.state.highestPriorityStatementWithTwo.length; i++){
          tempOutputResult.push({
            id: this.state.highestPriorityStatementWithTwo[i] + 1,
            timesSelected: 2,
            ranking: i + 1,
            priority: null,
          })
        }

        for(let i = 0; i < this.state.statementsSelectedOneTime.length; i++){
          tempOutputResult.push({
            id: this.state.statementsSelectedOneTime[i] + 1,
            timesSelected: 1,
            ranking: null,
            priority: this.state.levelForStatementSelectedOnce[i],
          })
        }

        this.setState({outputResult: tempOutputResult},() => {


          fetch('https://pacific-brook-35578.herokuapp.com/', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              email: this.state.email,
              firstName: this.state.firstName,
              lastName: this.state.lastName,
              outputArray: this.state.outputResult
            })
          }).then(response => response.json()).then(data => document.getElementById('guide2').innerHTML = data.status)
          }
        )


  }
      }
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }


  statementOneClicked = () => {
    const tempButtonSelected = this.state.buttonSelected;

    tempButtonSelected[this.state.currentSlide - 1] = 1;

    const tempStatementsSelected = this.state.statementsSelected;

    tempStatementsSelected[this.state.currentSlide - 1] = this.state.statements[(this.state.currentSlide - 1) * 8].id;

    this.setState({statementsSelected: tempStatementsSelected,
                   buttonSelected: tempButtonSelected})

    this.setState({buttonOne: "tl btn btn-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
    buttonTwo: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
    buttonThree: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
    buttonFour: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
    buttonFive: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
    buttonSix: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
    buttonSeven: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
    buttonEight: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
                  })


  }

  statementTwoClicked = () => {
    const tempButtonSelected = this.state.buttonSelected;

    tempButtonSelected[this.state.currentSlide - 1] = 2;


    const tempStatementsSelected = this.state.statementsSelected;

    tempStatementsSelected[this.state.currentSlide - 1] = this.state.statements[(this.state.currentSlide - 1) * 8 + 1].id;

    this.setState({statementsSelected: tempStatementsSelected,
                   buttonSelected: tempButtonSelected})

    this.setState({buttonOne: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
    buttonTwo: "tl btn btn-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
    buttonThree: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
    buttonFour: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
    buttonFive: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
    buttonSix: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
    buttonSeven: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
    buttonEight: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6"
                  })

  }

  statementThreeClicked = () => {
    const tempButtonSelected = this.state.buttonSelected;

    tempButtonSelected[this.state.currentSlide - 1] = 3;

    const tempStatementsSelected = this.state.statementsSelected;

    tempStatementsSelected[this.state.currentSlide - 1] = this.state.statements[(this.state.currentSlide - 1) * 8 + 2].id;

    this.setState({statementsSelected: tempStatementsSelected,
                   buttonSelected: tempButtonSelected})

    this.setState({buttonOne: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
    buttonTwo: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
    buttonThree: "tl btn btn-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
    buttonFour: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
    buttonFive: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
    buttonSix: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
    buttonSeven: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
    buttonEight: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
                  })

  }

  statementFourClicked = () => {

    const tempButtonSelected = this.state.buttonSelected;

    tempButtonSelected[this.state.currentSlide - 1] = 4;

    const tempStatementsSelected = this.state.statementsSelected;

    tempStatementsSelected[this.state.currentSlide - 1] = this.state.statements[(this.state.currentSlide - 1) * 8 + 3].id;

    this.setState({statementsSelected: tempStatementsSelected,
                   buttonSelected: tempButtonSelected})

    this.setState({buttonOne: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
    buttonTwo: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
    buttonThree: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
    buttonFour: "tl btn btn-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
    buttonFive: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
    buttonSix: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
    buttonSeven: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
    buttonEight: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
                  })

  }

  statementFiveClicked = () => {

    const tempButtonSelected = this.state.buttonSelected;

    tempButtonSelected[this.state.currentSlide - 1] = 5;

    const tempStatementsSelected = this.state.statementsSelected;

    tempStatementsSelected[this.state.currentSlide - 1] = this.state.statements[(this.state.currentSlide - 1) * 8 + 4].id;

    this.setState({statementsSelected: tempStatementsSelected,
                   buttonSelected: tempButtonSelected})

    this.setState({buttonOne: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
    buttonTwo: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
    buttonThree: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
    buttonFour: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
    buttonFive: "tl btn btn-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
    buttonSix: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
    buttonSeven: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
    buttonEight: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
                  })



  }

  statementSixClicked = () => {

    const tempButtonSelected = this.state.buttonSelected;

    tempButtonSelected[this.state.currentSlide - 1] = 6;

    const tempStatementsSelected = this.state.statementsSelected;

    tempStatementsSelected[this.state.currentSlide - 1] = this.state.statements[(this.state.currentSlide - 1) * 8 + 5].id;

    this.setState({statementsSelected: tempStatementsSelected,
                   buttonSelected: tempButtonSelected})

    this.setState({buttonOne: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
    buttonTwo: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
    buttonThree: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
    buttonFour: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
    buttonFive: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
    buttonSix: "tl btn btn-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
    buttonSeven: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
    buttonEight: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
                  })

  }

  statementSevenClicked = () => {

    const tempButtonSelected = this.state.buttonSelected;

    tempButtonSelected[this.state.currentSlide - 1] = 7;

    const tempStatementsSelected = this.state.statementsSelected;

    tempStatementsSelected[this.state.currentSlide - 1] = this.state.statements[(this.state.currentSlide - 1) * 8 + 6].id;

    this.setState({statementsSelected: tempStatementsSelected,
                   buttonSelected: tempButtonSelected})

    this.setState({buttonOne: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
    buttonTwo: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
    buttonThree: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
    buttonFour: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
    buttonFive: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
    buttonSix: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
    buttonSeven: "tl btn btn-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
    buttonEight: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
                  })

  }

  statementEightClicked = () => {

    const tempButtonSelected = this.state.buttonSelected;

    tempButtonSelected[this.state.currentSlide - 1] = 8;

    const tempStatementsSelected = this.state.statementsSelected;

    tempStatementsSelected[this.state.currentSlide - 1] = this.state.statements[(this.state.currentSlide - 1) * 8 + 7].id;

    this.setState({statementsSelected: tempStatementsSelected,
                   buttonSelected: tempButtonSelected})

    this.setState({buttonOne: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
    buttonTwo: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
    buttonThree: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
    buttonFour: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
    buttonFive: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
    buttonSix: "tl btn btn-outline-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6",
    buttonSeven: "tl btn btn-outline-primary dib br3 pa2 mv3 mh5 grow bw2 shadow-5 f6",
    buttonEight: "tl btn btn-primary dib br3 pa2 mv2 mh5 grow bw2 shadow-5 f6"
                  })

  }

    buttonNineClicked = () => {
      if(this.state.priorityCountWithThree < this.state.statementsSelectedThreeTimes.length){
      const tempThreeTimesSelectedArray = this.state.highestPriorityStatementWithThree;
      tempThreeTimesSelectedArray.push(this.state.statementsSelectedThreeTimes[0]);
      document.getElementById('button9').disabled = true;
      document.getElementById('resetWithThree').style.display = 'inherit';
      document.getElementById('button10').innerHTML = this.state.priorityCountWithThree + 1;
      document.getElementById('button10').style.display = 'inherit';
      this.setState({priorityCountWithThree: this.state.priorityCountWithThree + 1,
                     highestPriorityStatementWithThree: tempThreeTimesSelectedArray})
                   }
    }

    buttonElevenClicked = () => {
      if(this.state.priorityCountWithThree < this.state.statementsSelectedThreeTimes.length){
      const tempThreeTimesSelectedArray = this.state.highestPriorityStatementWithThree;
      tempThreeTimesSelectedArray.push(this.state.statementsSelectedThreeTimes[1]);
      document.getElementById('button11').disabled = true;
      document.getElementById('resetWithThree').style.display = 'inherit';
      document.getElementById('button12').innerHTML = this.state.priorityCountWithThree + 1;
      document.getElementById('button12').style.display = 'inherit';
      this.setState({priorityCountWithThree: this.state.priorityCountWithThree + 1,
                     highestPriorityStatementWithThree: tempThreeTimesSelectedArray})
                   }
    }
    buttonThirteenClicked = () => {
      if(this.state.priorityCountWithThree < this.state.statementsSelectedThreeTimes.length){
      const tempThreeTimesSelectedArray = this.state.highestPriorityStatementWithThree;
      tempThreeTimesSelectedArray.push(this.state.statementsSelectedThreeTimes[2]);
      document.getElementById('button13').disabled = true;
      document.getElementById('resetWithThree').style.display = 'inherit';
      document.getElementById('button14').innerHTML = this.state.priorityCountWithThree + 1;
      document.getElementById('button14').style.display = 'inherit';
      this.setState({priorityCountWithThree: this.state.priorityCountWithThree + 1,
                     highestPriorityStatementWithThree: tempThreeTimesSelectedArray})
                   }
    }
    buttonFifteenClicked = () => {
      if(this.state.priorityCountWithThree < this.state.statementsSelectedThreeTimes.length){
      const tempThreeTimesSelectedArray = this.state.highestPriorityStatementWithThree;
      tempThreeTimesSelectedArray.push(this.state.statementsSelectedThreeTimes[3]);
      document.getElementById('button15').disabled = true;
      document.getElementById('resetWithThree').style.display = 'inherit';
      document.getElementById('button16').innerHTML = this.state.priorityCountWithThree + 1;
      document.getElementById('button16').style.display = 'inherit';
      this.setState({priorityCountWithThree: this.state.priorityCountWithThree + 1,
                     highestPriorityStatementWithThree: tempThreeTimesSelectedArray})
                   }
    }
    buttonSeventeenClicked = () => {
      if(this.state.priorityCountWithThree < this.state.statementsSelectedThreeTimes.length){
      const tempThreeTimesSelectedArray = this.state.highestPriorityStatementWithThree;
      tempThreeTimesSelectedArray.push(this.state.statementsSelectedThreeTimes[4]);
      document.getElementById('button17').disabled = true;
      document.getElementById('resetWithThree').style.display = 'inherit';
      document.getElementById('button18').innerHTML = this.state.priorityCountWithThree + 1;
      document.getElementById('button18').style.display = 'inherit';
      this.setState({priorityCountWithThree: this.state.priorityCountWithThree + 1,
                     highestPriorityStatementWithThree: tempThreeTimesSelectedArray})
                   }
    }
    buttonNineteenClicked = () => {
      if(this.state.priorityCountWithThree < this.state.statementsSelectedThreeTimes.length){
      const tempThreeTimesSelectedArray = this.state.highestPriorityStatementWithThree;
      tempThreeTimesSelectedArray.push(this.state.statementsSelectedThreeTimes[5]);
      document.getElementById('button19').disabled = true;
      document.getElementById('resetWithThree').style.display = 'inherit';
      document.getElementById('button20').innerHTML = this.state.priorityCountWithThree + 1;
      document.getElementById('button20').style.display = 'inherit';
      this.setState({priorityCountWithThree: this.state.priorityCountWithThree + 1,
                     highestPriorityStatementWithThree: tempThreeTimesSelectedArray})
                   }
    }
    buttonTwentyoneClicked = () => {
      if(this.state.priorityCountWithThree < this.state.statementsSelectedThreeTimes.length){
      const tempThreeTimesSelectedArray = this.state.highestPriorityStatementWithThree;
      tempThreeTimesSelectedArray.push(this.state.statementsSelectedThreeTimes[6]);
      document.getElementById('button21').disabled = true;
      document.getElementById('resetWithThree').style.display = 'inherit';
      document.getElementById('button22').innerHTML = this.state.priorityCountWithThree + 1;
      document.getElementById('button22').style.display = 'inherit';
      this.setState({priorityCountWithThree: this.state.priorityCountWithThree + 1,
                     highestPriorityStatementWithThree: tempThreeTimesSelectedArray})
                   }
    }
    buttonTwentythreeClicked = () => {
      if(this.state.priorityCountWithThree < this.state.statementsSelectedThreeTimes.length){
      const tempThreeTimesSelectedArray = this.state.highestPriorityStatementWithThree;
      tempThreeTimesSelectedArray.push(this.state.statementsSelectedThreeTimes[7]);
      document.getElementById('button23').disabled = true;
      document.getElementById('resetWithThree').style.display = 'inherit';
      document.getElementById('button24').innerHTML = this.state.priorityCountWithThree + 1;
      document.getElementById('button24').style.display = 'inherit';
      this.setState({priorityCountWithThree: this.state.priorityCountWithThree + 1,
                     highestPriorityStatementWithThree: tempThreeTimesSelectedArray})
                   }
    }

    resetPageWithThree = () => {
        this.setState({highestPriorityStatementWithThree: [],
                      priorityCountWithThree: 0})
        document.getElementById('button9').disabled = false;
        document.getElementById('button11').disabled = false;
        document.getElementById('button13').disabled = false;
        document.getElementById('button15').disabled = false;
        document.getElementById('button17').disabled = false;
        document.getElementById('button19').disabled = false;
        document.getElementById('button21').disabled = false;
        document.getElementById('button23').disabled = false;
        document.getElementById('resetWithThree').style.display = 'none';
        document.getElementById('button10').style.display = 'none';
        document.getElementById('button12').style.display = 'none';
        document.getElementById('button14').style.display = 'none';
        document.getElementById('button16').style.display = 'none';
        document.getElementById('button18').style.display = 'none';
        document.getElementById('button20').style.display = 'none';
        document.getElementById('button22').style.display = 'none';
        document.getElementById('button24').style.display = 'none';
        document.getElementById('button10').innerHTML = '';
        document.getElementById('button12').innerHTML = '';
        document.getElementById('button14').innerHTML = '';
        document.getElementById('button16').innerHTML = '';
        document.getElementById('button18').innerHTML = '';
        document.getElementById('button20').innerHTML = '';
        document.getElementById('button22').innerHTML = '';
        document.getElementById('button24').innerHTML = '';
    }

    buttonTwentyfiveClicked = () => {
      if(this.state.priorityCountWithTwo < this.state.statementsSelectedTwoTimes.length){
      const tempTwoTimesSelectedArray = this.state.highestPriorityStatementWithTwo;
      tempTwoTimesSelectedArray.push(this.state.statementsSelectedTwoTimes[0]);
      document.getElementById('button25').disabled = true;
      document.getElementById('resetWithTwo').style.display = 'inherit';
      document.getElementById('button26').innerHTML = this.state.priorityCountWithTwo + 1;
      document.getElementById('button26').style.display = 'inherit';
      this.setState({priorityCountWithTwo: this.state.priorityCountWithTwo + 1,
                     highestPriorityStatementWithTwo: tempTwoTimesSelectedArray})
                   }
    }

    buttonTwentysevenClicked = () => {
      if(this.state.priorityCountWithTwo < this.state.statementsSelectedTwoTimes.length){
      const tempTwoTimesSelectedArray = this.state.highestPriorityStatementWithTwo;
      tempTwoTimesSelectedArray.push(this.state.statementsSelectedTwoTimes[1]);
      document.getElementById('button27').disabled = true;
      document.getElementById('resetWithTwo').style.display = 'inherit';
      document.getElementById('button28').innerHTML = this.state.priorityCountWithTwo + 1;
      document.getElementById('button28').style.display = 'inherit';
      this.setState({priorityCountWithTwo: this.state.priorityCountWithTwo + 1,
                     highestPriorityStatementWithTwo: tempTwoTimesSelectedArray})
                   }
    }

    buttonTwentynineClicked = () => {
      if(this.state.priorityCountWithTwo < this.state.statementsSelectedTwoTimes.length){
      const tempTwoTimesSelectedArray = this.state.highestPriorityStatementWithTwo;
      tempTwoTimesSelectedArray.push(this.state.statementsSelectedTwoTimes[2]);
      document.getElementById('button29').disabled = true;
      document.getElementById('resetWithTwo').style.display = 'inherit';
      document.getElementById('button30').innerHTML = this.state.priorityCountWithTwo + 1;
      document.getElementById('button30').style.display = 'inherit';
      this.setState({priorityCountWithTwo: this.state.priorityCountWithTwo + 1,
                     highestPriorityStatementWithTwo: tempTwoTimesSelectedArray})
                   }
    }

    buttonThirtyoneClicked = () => {
      if(this.state.priorityCountWithTwo < this.state.statementsSelectedTwoTimes.length){
      const tempTwoTimesSelectedArray = this.state.highestPriorityStatementWithTwo;
      tempTwoTimesSelectedArray.push(this.state.statementsSelectedTwoTimes[3]);
      document.getElementById('button31').disabled = true;
      document.getElementById('resetWithTwo').style.display = 'inherit';
      document.getElementById('button32').innerHTML = this.state.priorityCountWithTwo + 1;
      document.getElementById('button32').style.display = 'inherit';
      this.setState({priorityCountWithTwo: this.state.priorityCountWithTwo + 1,
                     highestPriorityStatementWithTwo: tempTwoTimesSelectedArray})
                   }
    }

    buttonThirtythreeClicked = () => {
      if(this.state.priorityCountWithTwo < this.state.statementsSelectedTwoTimes.length){
      const tempTwoTimesSelectedArray = this.state.highestPriorityStatementWithTwo;
      tempTwoTimesSelectedArray.push(this.state.statementsSelectedTwoTimes[4]);
      document.getElementById('button33').disabled = true;
      document.getElementById('resetWithTwo').style.display = 'inherit';
      document.getElementById('button34').innerHTML = this.state.priorityCountWithTwo + 1;
      document.getElementById('button34').style.display = 'inherit';
      this.setState({priorityCountWithTwo: this.state.priorityCountWithTwo + 1,
                     highestPriorityStatementWithTwo: tempTwoTimesSelectedArray})
                   }
    }

    buttonThirtyfiveClicked = () => {
      if(this.state.priorityCountWithTwo < this.state.statementsSelectedTwoTimes.length){
      const tempTwoTimesSelectedArray = this.state.highestPriorityStatementWithTwo;
      tempTwoTimesSelectedArray.push(this.state.statementsSelectedTwoTimes[5]);
      document.getElementById('button35').disabled = true;
      document.getElementById('resetWithTwo').style.display = 'inherit';
      document.getElementById('button36').innerHTML = this.state.priorityCountWithTwo + 1;
      document.getElementById('button36').style.display = 'inherit';
      this.setState({priorityCountWithTwo: this.state.priorityCountWithTwo + 1,
                     highestPriorityStatementWithTwo: tempTwoTimesSelectedArray})
                   }
    }

    buttonThirtysevenClicked = () => {
      if(this.state.priorityCountWithTwo < this.state.statementsSelectedTwoTimes.length){
      const tempTwoTimesSelectedArray = this.state.highestPriorityStatementWithTwo;
      tempTwoTimesSelectedArray.push(this.state.statementsSelectedTwoTimes[6]);
      document.getElementById('button37').disabled = true;
      document.getElementById('resetWithTwo').style.display = 'inherit';
      document.getElementById('button38').innerHTML = this.state.priorityCountWithTwo + 1;
      document.getElementById('button38').style.display = 'inherit';
      this.setState({priorityCountWithTwo: this.state.priorityCountWithTwo + 1,
                     highestPriorityStatementWithTwo: tempTwoTimesSelectedArray})
                   }
    }

    buttonThirtynineClicked = () => {
      if(this.state.priorityCountWithTwo < this.state.statementsSelectedTwoTimes.length){
      const tempTwoTimesSelectedArray = this.state.highestPriorityStatementWithTwo;
      tempTwoTimesSelectedArray.push(this.state.statementsSelectedTwoTimes[7]);
      document.getElementById('button39').disabled = true;
      document.getElementById('resetWithTwo').style.display = 'inherit';
      document.getElementById('button40').innerHTML = this.state.priorityCountWithTwo + 1;
      document.getElementById('button40').style.display = 'inherit';
      this.setState({priorityCountWithTwo: this.state.priorityCountWithTwo + 1,
                     highestPriorityStatementWithTwo: tempTwoTimesSelectedArray})
                   }
    }

    buttonFourtyoneClicked = () => {
      if(this.state.priorityCountWithTwo < this.state.statementsSelectedTwoTimes.length){
      const tempTwoTimesSelectedArray = this.state.highestPriorityStatementWithTwo;
      tempTwoTimesSelectedArray.push(this.state.statementsSelectedTwoTimes[8]);
      document.getElementById('button41').disabled = true;
      document.getElementById('resetWithTwo').style.display = 'inherit';
      document.getElementById('button42').innerHTML = this.state.priorityCountWithTwo + 1;
      document.getElementById('button42').style.display = 'inherit';
      this.setState({priorityCountWithTwo: this.state.priorityCountWithTwo + 1,
                     highestPriorityStatementWithTwo: tempTwoTimesSelectedArray})
                   }
    }

    buttonFourtythreeClicked = () => {
      if(this.state.priorityCountWithTwo < this.state.statementsSelectedTwoTimes.length){
      const tempTwoTimesSelectedArray = this.state.highestPriorityStatementWithTwo;
      tempTwoTimesSelectedArray.push(this.state.statementsSelectedTwoTimes[9]);
      document.getElementById('button43').disabled = true;
      document.getElementById('resetWithTwo').style.display = 'inherit';
      document.getElementById('button44').innerHTML = this.state.priorityCountWithTwo + 1;
      document.getElementById('button44').style.display = 'inherit';
      this.setState({priorityCountWithTwo: this.state.priorityCountWithTwo + 1,
                     highestPriorityStatementWithTwo: tempTwoTimesSelectedArray})
                   }
    }

    buttonFourtyfiveClicked = () => {
      if(this.state.priorityCountWithTwo < this.state.statementsSelectedTwoTimes.length){
      const tempTwoTimesSelectedArray = this.state.highestPriorityStatementWithTwo;
      tempTwoTimesSelectedArray.push(this.state.statementsSelectedTwoTimes[10]);
      document.getElementById('button45').disabled = true;
      document.getElementById('resetWithTwo').style.display = 'inherit';
      document.getElementById('button46').innerHTML = this.state.priorityCountWithTwo + 1;
      document.getElementById('button46').style.display = 'inherit';
      this.setState({priorityCountWithTwo: this.state.priorityCountWithTwo + 1,
                     highestPriorityStatementWithTwo: tempTwoTimesSelectedArray})
                   }
    }

    buttonFourtysevenClicked = () => {
      if(this.state.priorityCountWithTwo < this.state.statementsSelectedTwoTimes.length){
      const tempTwoTimesSelectedArray = this.state.highestPriorityStatementWithTwo;
      tempTwoTimesSelectedArray.push(this.state.statementsSelectedTwoTimes[11])
      document.getElementById('button47').disabled = true;
      document.getElementById('resetWithTwo').style.display = 'inherit';
      document.getElementById('button48').innerHTML = this.state.priorityCountWithTwo + 1;
      document.getElementById('button48').style.display = 'inherit';
      this.setState({priorityCountWithTwo: this.state.priorityCountWithTwo + 1,
                     highestPriorityStatementWithTwo: tempTwoTimesSelectedArray})
                   }
    }

    resetPageWithTwo = () => {
        this.setState({highestPriorityStatementWithTwo: [],
                      priorityCountWithTwo: 0})
        document.getElementById('button25').disabled = false;
        document.getElementById('button27').disabled = false;
        document.getElementById('button29').disabled = false;
        document.getElementById('button31').disabled = false;
        document.getElementById('button33').disabled = false;
        document.getElementById('button35').disabled = false;
        document.getElementById('button37').disabled = false;
        document.getElementById('button39').disabled = false;
        document.getElementById('button41').disabled = false;
        document.getElementById('button43').disabled = false;
        document.getElementById('button45').disabled = false;
        document.getElementById('button47').disabled = false;
        document.getElementById('resetWithTwo').style.display = 'none';
        document.getElementById('button26').style.display = 'none';
        document.getElementById('button28').style.display = 'none';
        document.getElementById('button30').style.display = 'none';
        document.getElementById('button32').style.display = 'none';
        document.getElementById('button34').style.display = 'none';
        document.getElementById('button36').style.display = 'none';
        document.getElementById('button38').style.display = 'none';
        document.getElementById('button40').style.display = 'none';
        document.getElementById('button42').style.display = 'none';
        document.getElementById('button44').style.display = 'none';
        document.getElementById('button46').style.display = 'none';
        document.getElementById('button48').style.display = 'none';
        document.getElementById('button26').innerHTML = '';
        document.getElementById('button28').innerHTML = '';
        document.getElementById('button30').innerHTML = '';
        document.getElementById('button32').innerHTML = '';
        document.getElementById('button34').innerHTML = '';
        document.getElementById('button36').innerHTML = '';
        document.getElementById('button38').innerHTML = '';
        document.getElementById('button40').innerHTML = '';
        document.getElementById('button42').innerHTML = '';
        document.getElementById('button44').innerHTML = '';
        document.getElementById('button46').innerHTML = '';
        document.getElementById('button48').innerHTML = '';
    }

    buttonFourtynineClicked = () => {
      const tempLevelArray = this.state.levelForStatementSelectedOnce;
      if(this.state.levelForStatementSelectedOnce[0] === 'Low'){
        tempLevelArray[0] = 'Mid';
        document.getElementById('button50').innerHTML = 'Mid';
      } else if (this.state.levelForStatementSelectedOnce[0] === 'Mid'){
        tempLevelArray[0] = 'High';
        document.getElementById('button50').innerHTML = 'High';
      } else if(this.state.levelForStatementSelectedOnce[0] === 'High'){
        tempLevelArray[0] = 'Low';
        document.getElementById('button50').innerHTML = 'Low';
      }

      this.setState({levelForStatementSelectedOnce: tempLevelArray})
    }

    buttonFiftyoneClicked = () => {
      const tempLevelArray = this.state.levelForStatementSelectedOnce;
      if(this.state.levelForStatementSelectedOnce[1] === 'Low'){
        tempLevelArray[1] = 'Mid';
        document.getElementById('button52').innerHTML = 'Mid';
      } else if (this.state.levelForStatementSelectedOnce[1] === 'Mid'){
        tempLevelArray[1] = 'High';
        document.getElementById('button52').innerHTML = 'High';
      } else if(this.state.levelForStatementSelectedOnce[1] === 'High'){
        tempLevelArray[1] = 'Low';
        document.getElementById('button52').innerHTML = 'Low';
      }

      this.setState({levelForStatementSelectedOnce: tempLevelArray})
    }

    buttonFiftythreeClicked = () => {
      const tempLevelArray = this.state.levelForStatementSelectedOnce;
      if(this.state.levelForStatementSelectedOnce[2] === 'Low'){
        tempLevelArray[2] = 'Mid';
        document.getElementById('button54').innerHTML = 'Mid';
      } else if (this.state.levelForStatementSelectedOnce[2] === 'Mid'){
        tempLevelArray[2] = 'High';
        document.getElementById('button54').innerHTML = 'High';
      } else if(this.state.levelForStatementSelectedOnce[2] === 'High'){
        tempLevelArray[2] = 'Low';
        document.getElementById('button54').innerHTML = 'Low';
      }

      this.setState({levelForStatementSelectedOnce: tempLevelArray})
    }

    buttonFiftyfiveClicked = () => {
      const tempLevelArray = this.state.levelForStatementSelectedOnce;
      if(this.state.levelForStatementSelectedOnce[3] === 'Low'){
        tempLevelArray[3] = 'Mid';
        document.getElementById('button56').innerHTML = 'Mid';
      } else if (this.state.levelForStatementSelectedOnce[3] === 'Mid'){
        tempLevelArray[3] = 'High';
        document.getElementById('button56').innerHTML = 'High';
      } else if(this.state.levelForStatementSelectedOnce[3] === 'High'){
        tempLevelArray[3] = 'Low';
        document.getElementById('button56').innerHTML = 'Low';
      }

      this.setState({levelForStatementSelectedOnce: tempLevelArray})
    }

    buttonFiftysevenClicked = () => {
      const tempLevelArray = this.state.levelForStatementSelectedOnce;
      if(this.state.levelForStatementSelectedOnce[4] === 'Low'){
        tempLevelArray[4] = 'Mid';
        document.getElementById('button58').innerHTML = 'Mid';
      } else if (this.state.levelForStatementSelectedOnce[4] === 'Mid'){
        tempLevelArray[4] = 'High';
        document.getElementById('button58').innerHTML = 'High';
      } else if(this.state.levelForStatementSelectedOnce[4] === 'High'){
        tempLevelArray[4] = 'Low';
        document.getElementById('button58').innerHTML = 'Low';
      }

      this.setState({levelForStatementSelectedOnce: tempLevelArray})
    }

    buttonFiftynineClicked = () => {
      const tempLevelArray = this.state.levelForStatementSelectedOnce;
      if(this.state.levelForStatementSelectedOnce[5] === 'Low'){
        tempLevelArray[5] = 'Mid';
        document.getElementById('button60').innerHTML = 'Mid';
      } else if (this.state.levelForStatementSelectedOnce[5] === 'Mid'){
        tempLevelArray[5] = 'High';
        document.getElementById('button60').innerHTML = 'High';
      } else if(this.state.levelForStatementSelectedOnce[5] === 'High'){
        tempLevelArray[5] = 'Low';
        document.getElementById('button60').innerHTML = 'Low';
      }

      this.setState({levelForStatementSelectedOnce: tempLevelArray})
    }

    buttonSixtyoneClicked = () => {
      const tempLevelArray = this.state.levelForStatementSelectedOnce;
      if(this.state.levelForStatementSelectedOnce[6] === 'Low'){
        tempLevelArray[6] = 'Mid';
        document.getElementById('button62').innerHTML = 'Mid';
      } else if (this.state.levelForStatementSelectedOnce[6] === 'Mid'){
        tempLevelArray[6] = 'High';
        document.getElementById('button62').innerHTML = 'High';
      } else if(this.state.levelForStatementSelectedOnce[6] === 'High'){
        tempLevelArray[6] = 'Low';
        document.getElementById('button62').innerHTML = 'Low';
      }

      this.setState({levelForStatementSelectedOnce: tempLevelArray})
    }

    buttonSixtythreeClicked = () => {
      const tempLevelArray = this.state.levelForStatementSelectedOnce;
      if(this.state.levelForStatementSelectedOnce[7] === 'Low'){
        tempLevelArray[7] = 'Mid';
        document.getElementById('button64').innerHTML = 'Mid';
      } else if (this.state.levelForStatementSelectedOnce[7] === 'Mid'){
        tempLevelArray[7] = 'High';
        document.getElementById('button64').innerHTML = 'High';
      } else if(this.state.levelForStatementSelectedOnce[7] === 'High'){
        tempLevelArray[7] = 'Low';
        document.getElementById('button64').innerHTML = 'Low';
      }

      this.setState({levelForStatementSelectedOnce: tempLevelArray})
    }

    buttonSixtyfiveClicked = () => {
      const tempLevelArray = this.state.levelForStatementSelectedOnce;
      if(this.state.levelForStatementSelectedOnce[8] === 'Low'){
        tempLevelArray[8] = 'Mid';
        document.getElementById('button66').innerHTML = 'Mid';
      } else if (this.state.levelForStatementSelectedOnce[8] === 'Mid'){
        tempLevelArray[8] = 'High';
        document.getElementById('button66').innerHTML = 'High';
      } else if(this.state.levelForStatementSelectedOnce[8] === 'High'){
        tempLevelArray[8] = 'Low';
        document.getElementById('button66').innerHTML = 'Low';
      }

      this.setState({levelForStatementSelectedOnce: tempLevelArray})
    }

    buttonSixtysevenClicked = () => {
      const tempLevelArray = this.state.levelForStatementSelectedOnce;
      if(this.state.levelForStatementSelectedOnce[9] === 'Low'){
        tempLevelArray[9] = 'Mid';
        document.getElementById('button68').innerHTML = 'Mid';
      } else if (this.state.levelForStatementSelectedOnce[9] === 'Mid'){
        tempLevelArray[9] = 'High';
        document.getElementById('button68').innerHTML = 'High';
      } else if(this.state.levelForStatementSelectedOnce[9] === 'High'){
        tempLevelArray[9] = 'Low';
        document.getElementById('button68').innerHTML = 'Low';
      }

      this.setState({levelForStatementSelectedOnce: tempLevelArray})
    }

    buttonSixtynineClicked = () => {
      const tempLevelArray = this.state.levelForStatementSelectedOnce;
      if(this.state.levelForStatementSelectedOnce[10] === 'Low'){
        tempLevelArray[10] = 'Mid';
        document.getElementById('button70').innerHTML = 'Mid';
      } else if (this.state.levelForStatementSelectedOnce[10] === 'Mid'){
        tempLevelArray[10] = 'High';
        document.getElementById('button70').innerHTML = 'High';
      } else if(this.state.levelForStatementSelectedOnce[10] === 'High'){
        tempLevelArray[10] = 'Low';
        document.getElementById('button70').innerHTML = 'Low';
      }

      this.setState({levelForStatementSelectedOnce: tempLevelArray})
    }

    buttonSeventyoneClicked = () => {
      const tempLevelArray = this.state.levelForStatementSelectedOnce;
      if(this.state.levelForStatementSelectedOnce[11] === 'Low'){
        tempLevelArray[11] = 'Mid';
        document.getElementById('button72').innerHTML = 'Mid';
      } else if (this.state.levelForStatementSelectedOnce[11] === 'Mid'){
        tempLevelArray[11] = 'High';
        document.getElementById('button72').innerHTML = 'High';
      } else if(this.state.levelForStatementSelectedOnce[11] === 'High'){
        tempLevelArray[11] = 'Low';
        document.getElementById('button72').innerHTML = 'Low';
      }

      this.setState({levelForStatementSelectedOnce: tempLevelArray})
    }

    buttonSeventythreeClicked = () => {
      const tempLevelArray = this.state.levelForStatementSelectedOnce;
      if(this.state.levelForStatementSelectedOnce[12] === 'Low'){
        tempLevelArray[12] = 'Mid';
        document.getElementById('button74').innerHTML = 'Mid';
      } else if (this.state.levelForStatementSelectedOnce[12] === 'Mid'){
        tempLevelArray[12] = 'High';
        document.getElementById('button74').innerHTML = 'High';
      } else if(this.state.levelForStatementSelectedOnce[12] === 'High'){
        tempLevelArray[12] = 'Low';
        document.getElementById('button74').innerHTML = 'Low';
      }

      this.setState({levelForStatementSelectedOnce: tempLevelArray})
    }


    buttonSeventyfiveClicked = () => {
      const tempLevelArray = this.state.levelForStatementSelectedOnce;
      if(this.state.levelForStatementSelectedOnce[13] === 'Low'){
        tempLevelArray[13] = 'Mid';
        document.getElementById('button76').innerHTML = 'Mid';
      } else if (this.state.levelForStatementSelectedOnce[13] === 'Mid'){
        tempLevelArray[13] = 'High';
        document.getElementById('button76').innerHTML = 'High';
      } else if(this.state.levelForStatementSelectedOnce[13] === 'High'){
        tempLevelArray[13] = 'Low';
        document.getElementById('button76').innerHTML = 'Low';
      }

      this.setState({levelForStatementSelectedOnce: tempLevelArray})
    }

    buttonSeventysevenClicked = () => {
      const tempLevelArray = this.state.levelForStatementSelectedOnce;
      if(this.state.levelForStatementSelectedOnce[14] === 'Low'){
        tempLevelArray[14] = 'Mid';
        document.getElementById('button78').innerHTML = 'Mid';
      } else if (this.state.levelForStatementSelectedOnce[14] === 'Mid'){
        tempLevelArray[14] = 'High';
        document.getElementById('button78').innerHTML = 'High';
      } else if(this.state.levelForStatementSelectedOnce[14] === 'High'){
        tempLevelArray[14] = 'Low';
        document.getElementById('button78').innerHTML = 'Low';
      }

      this.setState({levelForStatementSelectedOnce: tempLevelArray})
    }


    buttonSeventynineClicked = () => {
      const tempLevelArray = this.state.levelForStatementSelectedOnce;
      if(this.state.levelForStatementSelectedOnce[15] === 'Low'){
        tempLevelArray[15] = 'Mid';
        document.getElementById('button80').innerHTML = 'Mid';
      } else if (this.state.levelForStatementSelectedOnce[15] === 'Mid'){
        tempLevelArray[15] = 'High';
        document.getElementById('button80').innerHTML = 'High';
      } else if(this.state.levelForStatementSelectedOnce[15] === 'High'){
        tempLevelArray[15] = 'Low';
        document.getElementById('button80').innerHTML = 'Low';
      }

      this.setState({levelForStatementSelectedOnce: tempLevelArray})
    }

    buttonEightyoneClicked = () => {
      const tempLevelArray = this.state.levelForStatementSelectedOnce;
      if(this.state.levelForStatementSelectedOnce[16] === 'Low'){
        tempLevelArray[16] = 'Mid';
        document.getElementById('button82').innerHTML = 'Mid';
      } else if (this.state.levelForStatementSelectedOnce[16] === 'Mid'){
        tempLevelArray[16] = 'High';
        document.getElementById('button82').innerHTML = 'High';
      } else if(this.state.levelForStatementSelectedOnce[16] === 'High'){
        tempLevelArray[16] = 'Low';
        document.getElementById('button82').innerHTML = 'Low';
      }

      this.setState({levelForStatementSelectedOnce: tempLevelArray})
    }


    buttonEightythreeClicked = () => {
      const tempLevelArray = this.state.levelForStatementSelectedOnce;
      if(this.state.levelForStatementSelectedOnce[17] === 'Low'){
        tempLevelArray[17] = 'Mid';
        document.getElementById('button84').innerHTML = 'Mid';
      } else if (this.state.levelForStatementSelectedOnce[17] === 'Mid'){
        tempLevelArray[17] = 'High';
        document.getElementById('button84').innerHTML = 'High';
      } else if(this.state.levelForStatementSelectedOnce[17] === 'High'){
        tempLevelArray[17] = 'Low';
        document.getElementById('button84').innerHTML = 'Low';
      }

      this.setState({levelForStatementSelectedOnce: tempLevelArray})
    }

    buttonEightyfiveClicked = () => {
      const tempLevelArray = this.state.levelForStatementSelectedOnce;
      if(this.state.levelForStatementSelectedOnce[18] === 'Low'){
        tempLevelArray[18] = 'Mid';
        document.getElementById('button86').innerHTML = 'Mid';
      } else if (this.state.levelForStatementSelectedOnce[18] === 'Mid'){
        tempLevelArray[18] = 'High';
        document.getElementById('button86').innerHTML = 'High';
      } else if(this.state.levelForStatementSelectedOnce[18] === 'High'){
        tempLevelArray[18] = 'Low';
        document.getElementById('button86').innerHTML = 'Low';
      }

      this.setState({levelForStatementSelectedOnce: tempLevelArray})
    }

    buttonEightysevenClicked = () => {
      const tempLevelArray = this.state.levelForStatementSelectedOnce;
      if(this.state.levelForStatementSelectedOnce[19] === 'Low'){
        tempLevelArray[19] = 'Mid';
        document.getElementById('button88').innerHTML = 'Mid';
      } else if (this.state.levelForStatementSelectedOnce[19] === 'Mid'){
        tempLevelArray[19] = 'High';
        document.getElementById('button88').innerHTML = 'High';
      } else if(this.state.levelForStatementSelectedOnce[19] === 'High'){
        tempLevelArray[19] = 'Low';
        document.getElementById('button88').innerHTML = 'Low';
      }

      this.setState({levelForStatementSelectedOnce: tempLevelArray})
    }

    buttonEightynineClicked = () => {
      const tempLevelArray = this.state.levelForStatementSelectedOnce;
      if(this.state.levelForStatementSelectedOnce[20] === 'Low'){
        tempLevelArray[20] = 'Mid';
        document.getElementById('button90').innerHTML = 'Mid';
      } else if (this.state.levelForStatementSelectedOnce[20] === 'Mid'){
        tempLevelArray[20] = 'High';
        document.getElementById('button90').innerHTML = 'High';
      } else if(this.state.levelForStatementSelectedOnce[20] === 'High'){
        tempLevelArray[20] = 'Low';
        document.getElementById('button90').innerHTML = 'Low';
      }

      this.setState({levelForStatementSelectedOnce: tempLevelArray})
    }

    buttonNinetyoneClicked = () => {
      const tempLevelArray = this.state.levelForStatementSelectedOnce;
      if(this.state.levelForStatementSelectedOnce[21] === 'Low'){
        tempLevelArray[21] = 'Mid';
        document.getElementById('button92').innerHTML = 'Mid';
      } else if (this.state.levelForStatementSelectedOnce[21] === 'Mid'){
        tempLevelArray[21] = 'High';
        document.getElementById('button92').innerHTML = 'High';
      } else if(this.state.levelForStatementSelectedOnce[21] === 'High'){
        tempLevelArray[21] = 'Low';
        document.getElementById('button92').innerHTML = 'Low';
      }

      this.setState({levelForStatementSelectedOnce: tempLevelArray})
    }

    buttonNinetythreeClicked = () => {
      const tempLevelArray = this.state.levelForStatementSelectedOnce;
      if(this.state.levelForStatementSelectedOnce[22] === 'Low'){
        tempLevelArray[22] = 'Mid';
        document.getElementById('button94').innerHTML = 'Mid';
      } else if (this.state.levelForStatementSelectedOnce[22] === 'Mid'){
        tempLevelArray[22] = 'High';
        document.getElementById('button94').innerHTML = 'High';
      } else if(this.state.levelForStatementSelectedOnce[22] === 'High'){
        tempLevelArray[22] = 'Low';
        document.getElementById('button94').innerHTML = 'Low';
      }

      this.setState({levelForStatementSelectedOnce: tempLevelArray})
    }

    buttonNinetyfiveClicked = () => {
      const tempLevelArray = this.state.levelForStatementSelectedOnce;
      if(this.state.levelForStatementSelectedOnce[23] === 'Low'){
        tempLevelArray[23] = 'Mid';
        document.getElementById('button96').innerHTML = 'Mid';
      } else if (this.state.levelForStatementSelectedOnce[23] === 'Mid'){
        tempLevelArray[23] = 'High';
        document.getElementById('button96').innerHTML = 'High';
      } else if(this.state.levelForStatementSelectedOnce[23] === 'High'){
        tempLevelArray[23] = 'Low';
        document.getElementById('button96').innerHTML = 'Low';
      }

      this.setState({levelForStatementSelectedOnce: tempLevelArray})
    }

  render(){


    return (
      <div>
        <img src={logo} alt='Logo' class='responsiveImage' id='logo'/>
          <h1 className='tc f2 b' id='title'>KVI</h1>

          <div id="emailForm">
          <h2 className='tc f3 b pa2' id='introGuide'>Welcome to Value Mentor's Key Values Inventory (KVI)</h2>
          <div className="pa2">
            <span className='b'><u>Background:</u> </span> <br></br>
            Values are our lifestyle priorities. For most people they are unconscious motivators. However, a key characteristic of successful people is that their values are not unconscious motivators. Rather, they are conscious.
            Successful people know what their values are, and how to live them.
          </div>
          <div className="pa2">
          Researchers over the past 30 years have identified 128 human values. They form the building blocks of human nature and relationships. These 128 values cover all things that could potentially be a priority in a person's life, for example:
          <ul>
           <li>Play/Recreation Being Self</li>
           <li>Knowledge/Discovery/Insight Empathy</li>
           <li>Adaptability/Flexibility Control/Order/Discipline</li>
           <li>Human Rights/Social Order Accountability/Ethics</li>
           <li>The Environment Faith/Risk/Vision</li>
           <li>Achievement/Success Sharing/Listening/Trust</li>
          </ul>
          <div>
          The KVI - A Key Values Inventory uses 64 of the 128 values. The KVI APP is designed to fast-track the process of taking an inventory of your values. The 64 values are called Key Values as they are the "key to unlocking" an understanding of the role that values play in your life-journey.
          </div>
          <div>
          <span className='b'><u>Instructions:</u> </span> <br></br>
          We recommend that you plan for 15 to 20 minutes to take an inventory of your values.
          <br></br><br></br>Follow the instructions at the top of each page, there are 26 pages you will click through.

          <br></br><br></br>At the end of the inventory, there is a submit button to generate your KVI report.

          <br></br><br></br>If you close your browser before you submit your responses, you will need to start the inventory over.

          <br></br><br></br>When you are ready, enter your name and email and click Next.

          <br></br><br></br>The information you provide and your results are kept confidential and in a secure place.
          </div>
</div>



            <form className="pa4" onSubmit={this.handleSubmit}>
            <div className="col">
              <input type="text" className="form-control" placeholder="First name" value={this.state.firstName} onChange={this.handleFirstNameChange}/>
            </div>
            <div className="col">
              <input type="text" className="form-control mv1" placeholder="Last name" value={this.state.lastName} onChange={this.handleLastNameChange}/>
            </div>
            <div className="col">
              <input type="email" className="form-control" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange}/>
            </div>
            <div align = 'right'>
            <button className="btn btn-outline-dark mv1" type="submit">Next</button>
            </div>
            </form>
            </div>


          <h2 className='tc f3 b' id='guide1' style={{display: 'none'}}>Click the statement that is a higher priority to you than any other statement in this set</h2>

          <div id='statementSelections' style={{display: 'none'}}>
          <div className="d-grid gap-2">
          <button className= {this.state.buttonOne} type="button" id = "button1" onClick={this.statementOneClicked}>{this.state.statements[(this.state.currentSlide - 1)*8].name}</button>
          </div>

          <div className="d-grid gap-2">
          <button className={this.state.buttonTwo} type="button" id = "button2" onClick={this.statementTwoClicked}>{this.state.statements[(this.state.currentSlide - 1)*8 + 1].name}</button>
          </div>

          <div className="d-grid gap-2">
          <button className={this.state.buttonThree} type="button" id="button3" onClick={this.statementThreeClicked}>{this.state.statements[(this.state.currentSlide - 1)*8 + 2].name}</button>
          </div>

          <div className="d-grid gap-2">
          <button className={this.state.buttonFour} type="button" id= "button4" onClick={this.statementFourClicked}>{this.state.statements[(this.state.currentSlide - 1)*8 + 3].name}</button>
          </div>

          <div className="d-grid gap-2">
          <button className={this.state.buttonFive} type="button" id= "button5"  onClick={this.statementFiveClicked}>{this.state.statements[(this.state.currentSlide - 1)*8 + 4].name}</button>
          </div>

          <div className="d-grid gap-2">
          <button className={this.state.buttonSix} type="button" id= "button6"  onClick={this.statementSixClicked}>{this.state.statements[(this.state.currentSlide - 1)*8 + 5].name}</button>
          </div>

          <div className="d-grid gap-2">
          <button className={this.state.buttonSeven} type="button" id= "button7" onClick={this.statementSevenClicked}>{this.state.statements[(this.state.currentSlide - 1)*8 + 6].name}</button>
          </div>

          <div className="d-grid gap-2">
          <button className={this.state.buttonEight} type="button" id= "button8" onClick={this.statementEightClicked}>{this.state.statements[(this.state.currentSlide - 1)*8 + 7].name}</button>
          </div>
          </div>


          <h2 className='tc f3 b' id='guide2' style={{display: 'none'}}>Rank the statements by clicking those that are the highest priority to you in order</h2>

          <div>
          <div className = 'flexbuttons'>
          <button type="button" className="btn btn-outline-primary ma4" id="button9" style={{display: 'none'}} onClick={this.buttonNineClicked}></button>
          <button type="button" className="btn btn-outline-primary ma4" id="button10" style={{display: 'none'}}></button>
          </div>
          <div className = 'flexbuttons'>
          <button type="button" className="btn btn-outline-primary ma4" id="button11" style={{display: 'none'}} onClick={this.buttonElevenClicked}></button>
          <button type="button" className="btn btn-outline-primary ma4" id="button12" style={{display: 'none'}}></button>
          </div>
          <div className = 'flexbuttons'>
          <button type="button" className="btn btn-outline-primary ma4" id="button13" style={{display: 'none'}} onClick={this.buttonThirteenClicked}></button>
          <button type="button" className="btn btn-outline-primary ma4" id="button14" style={{display: 'none'}}></button>
          </div>
          <div className = 'flexbuttons'>
          <button type="button" className="btn btn-outline-primary ma4" id="button15" style={{display: 'none'}} onClick={this.buttonFifteenClicked}></button>
          <button type="button" className="btn btn-outline-primary ma4" id="button16" style={{display: 'none'}}></button>
          </div>
          <div className = 'flexbuttons'>
          <button type="button" className="btn btn-outline-primary ma4" id="button17" style={{display: 'none'}} onClick={this.buttonSeventeenClicked}></button>
          <button type="button" className="btn btn-outline-primary ma4" id="button18" style={{display: 'none'}}></button>
          </div>
          <div className = 'flexbuttons'>
          <button type="button" className="btn btn-outline-primary ma4" id="button19" style={{display: 'none'}} onClick={this.buttonNineteenClicked}></button>
          <button type="button" className="btn btn-outline-primary ma4" id="button20" style={{display: 'none'}}></button>
          </div>
          <div className = 'flexbuttons'>
          <button type="button" className="btn btn-outline-primary ma4" id="button21" style={{display: 'none'}} onClick={this.buttonTwentyoneClicked}></button>
          <button type="button" className="btn btn-outline-primary ma4" id="button22" style={{display: 'none'}}></button>
          </div>
          <div className = 'flexbuttons'>
          <button type="button" className="btn btn-outline-primary ma4" id="button23" style={{display: 'none'}} onClick={this.buttonTwentythreeClicked}></button>
          <button type="button" className="btn btn-outline-primary ma4" id="button24" style={{display: 'none'}}></button>
          </div>
          <button type="button" className="btn btn-outline-danger ma4" id="resetWithThree" style={{display: 'none'}} onClick={this.resetPageWithThree}>Reset</button>
          </div>

          <div>
          <div className = 'flexbuttons'>
          <button type="button" className="btn btn-outline-primary ma4" id="button25" style={{display: 'none'}} onClick={this.buttonTwentyfiveClicked}></button>
          <button type="button" className="btn btn-outline-primary ma4" id="button26" style={{display: 'none'}}></button>
          </div>
          <div className = 'flexbuttons'>
          <button type="button" className="btn btn-outline-primary ma4" id="button27" style={{display: 'none'}} onClick={this.buttonTwentysevenClicked}></button>
          <button type="button" className="btn btn-outline-primary ma4" id="button28" style={{display: 'none'}}></button>
          </div>
          <div className = 'flexbuttons'>
          <button type="button" className="btn btn-outline-primary ma4" id="button29" style={{display: 'none'}} onClick={this.buttonTwentynineClicked}></button>
          <button type="button" className="btn btn-outline-primary ma4" id="button30" style={{display: 'none'}}></button>
          </div>
          <div className = 'flexbuttons'>
          <button type="button" className="btn btn-outline-primary ma4" id="button31" style={{display: 'none'}} onClick={this.buttonThirtyoneClicked}></button>
          <button type="button" className="btn btn-outline-primary ma4" id="button32" style={{display: 'none'}}></button>
          </div>
          <div className = 'flexbuttons'>
          <button type="button" className="btn btn-outline-primary ma4" id="button33" style={{display: 'none'}} onClick={this.buttonThirtythreeClicked}></button>
          <button type="button" className="btn btn-outline-primary ma4" id="button34" style={{display: 'none'}}></button>
          </div>
          <div className = 'flexbuttons'>
          <button type="button" className="btn btn-outline-primary ma4" id="button35" style={{display: 'none'}} onClick={this.buttonThirtyfiveClicked}></button>
          <button type="button" className="btn btn-outline-primary ma4" id="button36" style={{display: 'none'}}></button>
          </div>
          <div className = 'flexbuttons'>
          <button type="button" className="btn btn-outline-primary ma4" id="button37" style={{display: 'none'}} onClick={this.buttonThirtysevenClicked}></button>
          <button type="button" className="btn btn-outline-primary ma4" id="button38" style={{display: 'none'}}></button>
          </div>
          <div className = 'flexbuttons'>
          <button type="button" className="btn btn-outline-primary ma4" id="button39" style={{display: 'none'}} onClick={this.buttonThirtynineClicked}></button>
          <button type="button" className="btn btn-outline-primary ma4" id="button40" style={{display: 'none'}}></button>
          </div>
          <div className = 'flexbuttons'>
          <button type="button" className="btn btn-outline-primary ma4" id="button41" style={{display: 'none'}} onClick={this.buttonFourtyoneClicked}></button>
          <button type="button" className="btn btn-outline-primary ma4" id="button42" style={{display: 'none'}}></button>
          </div>
          <div className = 'flexbuttons'>
          <button type="button" className="btn btn-outline-primary ma4" id="button43" style={{display: 'none'}} onClick={this.buttonFourtythreeClicked}></button>
          <button type="button" className="btn btn-outline-primary ma4" id="button44" style={{display: 'none'}}></button>
          </div>
          <div className = 'flexbuttons'>
          <button type="button" className="btn btn-outline-primary ma4" id="button45" style={{display: 'none'}} onClick={this.buttonFourtyfiveClicked}></button>
          <button type="button" className="btn btn-outline-primary ma4" id="button46" style={{display: 'none'}}></button>
          </div>
          <div className = 'flexbuttons'>
          <button type="button" className="btn btn-outline-primary ma4" id="button47" style={{display: 'none'}} onClick={this.buttonFourtysevenClicked}></button>
          <button type="button" className="btn btn-outline-primary ma4" id="button48" style={{display: 'none'}}></button>
          </div>
          <button type="button" className="btn btn-outline-danger ma4" id="resetWithTwo" style={{display: 'none'}} onClick={this.resetPageWithTwo}>Reset</button>
          </div>

          <div id='priorityPart'>
          <div className = 'flexbuttons'>
          <button type="button" className="btn btn-outline-primary ma4" id="button49" style={{display: 'none'}} onClick={this.buttonFourtynineClicked}></button>
          <button type="button" className="btn btn-outline-primary ma4" id="button50" style={{display: 'none'}}></button>
          </div>
          <div className = 'flexbuttons'>
          <button type="button" className="btn btn-outline-primary ma4" id="button51" style={{display: 'none'}} onClick={this.buttonFiftyoneClicked}></button>
          <button type="button" className="btn btn-outline-primary ma4" id="button52" style={{display: 'none'}}></button>
          </div>
          <div className = 'flexbuttons'>
          <button type="button" className="btn btn-outline-primary ma4" id="button53" style={{display: 'none'}} onClick={this.buttonFiftythreeClicked}></button>
          <button type="button" className="btn btn-outline-primary ma4" id="button54" style={{display: 'none'}}></button>
          </div>
          <div className = 'flexbuttons'>
          <button type="button" className="btn btn-outline-primary ma4" id="button55" style={{display: 'none'}} onClick={this.buttonFiftyfiveClicked}></button>
          <button type="button" className="btn btn-outline-primary ma4" id="button56" style={{display: 'none'}}></button>
          </div>
          <div className = 'flexbuttons'>
          <button type="button" className="btn btn-outline-primary ma4" id="button57" style={{display: 'none'}} onClick={this.buttonFiftysevenClicked}></button>
          <button type="button" className="btn btn-outline-primary ma4" id="button58" style={{display: 'none'}}></button>
          </div>
          <div className = 'flexbuttons'>
          <button type="button" className="btn btn-outline-primary ma4" id="button59" style={{display: 'none'}} onClick={this.buttonFiftynineClicked}></button>
          <button type="button" className="btn btn-outline-primary ma4" id="button60" style={{display: 'none'}}></button>
          </div>
          <div className = 'flexbuttons'>
          <button type="button" className="btn btn-outline-primary ma4" id="button61" style={{display: 'none'}} onClick={this.buttonSixtyoneClicked}></button>
          <button type="button" className="btn btn-outline-primary ma4" id="button62" style={{display: 'none'}}></button>
          </div>
          <div className = 'flexbuttons'>
          <button type="button" className="btn btn-outline-primary ma4" id="button63" style={{display: 'none'}} onClick={this.buttonSixtythreeClicked}></button>
          <button type="button" className="btn btn-outline-primary ma4" id="button64" style={{display: 'none'}}></button>
          </div>
          <div className = 'flexbuttons'>
          <button type="button" className="btn btn-outline-primary ma4" id="button65" style={{display: 'none'}} onClick={this.buttonSixtyfiveClicked}></button>
          <button type="button" className="btn btn-outline-primary ma4" id="button66" style={{display: 'none'}}></button>
          </div>
          <div className = 'flexbuttons'>
          <button type="button" className="btn btn-outline-primary ma4" id="button67" style={{display: 'none'}} onClick={this.buttonSixtysevenClicked}></button>
          <button type="button" className="btn btn-outline-primary ma4" id="button68" style={{display: 'none'}}></button>
          </div>
          <div className = 'flexbuttons'>
          <button type="button" className="btn btn-outline-primary ma4" id="button69" style={{display: 'none'}} onClick={this.buttonSixtynineClicked}></button>
          <button type="button" className="btn btn-outline-primary ma4" id="button70" style={{display: 'none'}}></button>
          </div>
          <div className = 'flexbuttons'>
          <button type="button" className="btn btn-outline-primary ma4" id="button71" style={{display: 'none'}} onClick={this.buttonSeventyoneClicked}></button>
          <button type="button" className="btn btn-outline-primary ma4" id="button72" style={{display: 'none'}}></button>
          </div>
          <div className = 'flexbuttons'>
          <button type="button" className="btn btn-outline-primary ma4" id="button73" style={{display: 'none'}} onClick={this.buttonSeventythreeClicked}></button>
          <button type="button" className="btn btn-outline-primary ma4" id="button74" style={{display: 'none'}}></button>
          </div>
          <div className = 'flexbuttons'>
          <button type="button" className="btn btn-outline-primary ma4" id="button75" style={{display: 'none'}} onClick={this.buttonSeventyfiveClicked}></button>
          <button type="button" className="btn btn-outline-primary ma4" id="button76" style={{display: 'none'}}></button>
          </div>
          <div className = 'flexbuttons'>
          <button type="button" className="btn btn-outline-primary ma4" id="button77" style={{display: 'none'}} onClick={this.buttonSeventysevenClicked}></button>
          <button type="button" className="btn btn-outline-primary ma4" id="button78" style={{display: 'none'}}></button>
          </div>
          <div className = 'flexbuttons'>
          <button type="button" className="btn btn-outline-primary ma4" id="button79" style={{display: 'none'}} onClick={this.buttonSeventynineClicked}></button>
          <button type="button" className="btn btn-outline-primary ma4" id="button80" style={{display: 'none'}}></button>
          </div>
          <div className = 'flexbuttons'>
          <button type="button" className="btn btn-outline-primary ma4" id="button81" style={{display: 'none'}} onClick={this.buttonEightyoneClicked}></button>
          <button type="button" className="btn btn-outline-primary ma4" id="button82" style={{display: 'none'}}></button>
          </div>
          <div className = 'flexbuttons'>
          <button type="button" className="btn btn-outline-primary ma4" id="button83" style={{display: 'none'}} onClick={this.buttonEightythreeClicked}></button>
          <button type="button" className="btn btn-outline-primary ma4" id="button84" style={{display: 'none'}}></button>
          </div>
          <div className = 'flexbuttons'>
          <button type="button" className="btn btn-outline-primary ma4" id="button85" style={{display: 'none'}} onClick={this.buttonEightyfiveClicked}></button>
          <button type="button" className="btn btn-outline-primary ma4" id="button86" style={{display: 'none'}}></button>
          </div>
          <div className = 'flexbuttons'>
          <button type="button" className="btn btn-outline-primary ma4" id="button87" style={{display: 'none'}} onClick={this.buttonEightysevenClicked}></button>
          <button type="button" className="btn btn-outline-primary ma4" id="button88" style={{display: 'none'}}></button>
          </div>
          <div className = 'flexbuttons'>
          <button type="button" className="btn btn-outline-primary ma4" id="button89" style={{display: 'none'}} onClick={this.buttonEightynineClicked}></button>
          <button type="button" className="btn btn-outline-primary ma4" id="button90" style={{display: 'none'}}></button>
          </div>
          <div className = 'flexbuttons'>
          <button type="button" className="btn btn-outline-primary ma4" id="button91" style={{display: 'none'}} onClick={this.buttonNinetyoneClicked}></button>
          <button type="button" className="btn btn-outline-primary ma4" id="button92" style={{display: 'none'}}></button>
          </div>
          <div className = 'flexbuttons'>
          <button type="button" className="btn btn-outline-primary ma4" id="button93" style={{display: 'none'}} onClick={this.buttonNinetythreeClicked}></button>
          <button type="button" className="btn btn-outline-primary ma4" id="button94" style={{display: 'none'}}></button>
          </div>
          <div className = 'flexbuttons'>
          <button type="button" className="btn btn-outline-primary ma4" id="button95" style={{display: 'none'}} onClick={this.buttonNinetyfiveClicked}></button>
          <button type="button" className="btn btn-outline-primary ma4" id="button96" style={{display: 'none'}}></button>
          </div>
          </div>



          <div className = 'flexbuttons'>
          <button type="button" className="btn btn-outline-dark ma4" id="previousButton" style={{display: 'none'}} onClick={this.previousButtonClicked}>Previous</button>
          <button type="button" className="btn btn-outline-dark ma4" id="nextButton" style={{display: 'none'}} onClick={this.nextButtonClicked}>Next</button>
          </div>
      </div>
    );
  }
}

export default App;
