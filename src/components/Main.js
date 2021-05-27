import React from 'react'

import '../css/Main.scss'


class Main extends React.Component{
  
    constructor(){
        super()

        this.state = {
            email:'',
            password:'',
            date:'03',
            month:'March',
            year:'1995',
            organisation:'',
            emailAlert:'',
            showEmailAlert:'hidden',
            passwordAlert:'',
            showPasswordAlert:'hidden'

        }
        const yearDiff = 30
        const year = new Date().getFullYear()-yearDiff;
        this.year =  Array.from(new Array(yearDiff+1),(val, index) => (index + year));
        this.month=["January","February","March","April","May","June","July",
        "August","September","October","November","December"];
    }
  
    setValues = (e)=>{
        let name=e.target.name;
        let showAlert = "show"+name.charAt(0).toUpperCase()+name.slice(1)+'Alert'
        this.setState({
            [name]:e.target.value,
            [name+"Alert"]:'',
            [showAlert]:'hidden'
        })
    }

    submit = (e)=>{
        e.preventDefault();
        let submit = true;
        if(this.state.email===''){
            this.setState({
                emailAlert:"Please fill the email address",
                showEmailAlert:'visible'
            })
            submit=false;
        }else{
            let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if(!pattern.test(this.state.email)){
                this.setState({
                    emailAlert:"Please add valid email address",
                    showEmailAlert:'visible'
                })
                submit=false;
            }
        }

        if(this.state.password===''){
            this.setState({
                passwordAlert:"Please enter the password",
                showPasswordAlert:'visible'
            })
            submit=false;

        }else{
            let pattern = new RegExp(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{8,32}/)

            if(!pattern.test(this.state.password)){
                if(this.state.password.length <8){
                    this.setState({
                        passwordAlert:"Password is less than 8 characters",
                    })
                }else{
                    this.setState({
                        passwordAlert:"Password must have a numeric values",
                    })
                }
                this.setState({
                    showPasswordAlert:'visible'
                })
                submit=false;
            } 
        }

        if(submit){
            alert("form SUBMITTED\n"
                +"EMAIL: "+this.state.email+"\n"
                +"DOB: "+this.state.date+this.state.month+this.state.year+"\n"
                +(this.state.organisation && "ORGANISATION: "+this.state.organisation)
            )
            this.setState({
                email:'',
                date:'3',
                month:'march',
                year:'1995',
                organisation:'',
                password:'',
            })
            e.target.reset()
        }
    }


    render(){

        return(
            <main className="main">
                <form onSubmit={this.submit} noValidate>

                    <h2>Create an account</h2>

                    <section >
                        <h3 className='required'>Enter your email</h3>
                        <span className={'alert ' +this.state.showEmailAlert} >{this.state.emailAlert}</span>
                        <input  type='email' name='email' onChange={this.setValues}/>
                    </section>

                    <section className='d-o-b'>
                        <h3 className='optional'>Date of birth</h3>
                        <div>

                            <label>
                                Date
                                <input type='number' name='date' placeholder={this.state.date} onChange={this.setValues}  min="1" max="31"/>
                            </label>

                            <label>
                                Month
                                <select name='month'  value={this.state.month} onChange={this.setValues}>
                                    {this.month.map((option,index)=>(<option value={option.value}>
                                        {option}
                                    </option>))}
                                </select>
                            </label>

                            <label>
                                Year
                                <select name='year' value={this.state.year} onChange={this.setValues}>
                                    {this.year.map((option,index)=>(<option value={option.value}>
                                        {option}
                                    </option>))}
                                </select>
                            </label>

                        </div>
                    </section>

                    <section >
                        <h3 className='required'>Choose a strong password</h3>
                        <span className={'alert ' +this.state.showPasswordAlert}>{this.state.passwordAlert}</span>
                        <input  type='password' name='password' onChange={this.setValues}/>
                    </section>

                    <section>
                        <h3 className='optional'>Are you an agency or individual?</h3>
                       <div>
                            <label>
                                <input type='radio' value='individual' name='organisation' onChange={this.setValues}/>
                                Individual
                            </label>

                            <label>
                                <input type='radio' value='agency' name='organisation' onChange={this.setValues}/>
                                Agency
                            </label>
                       </div>
                    </section>

                    <input className='submit-button' type="submit" value="Submit" />

                </form>
            </main>
        );
    }
}

export default Main;