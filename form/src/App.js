import React, { Component } from 'react';
import './App.css';

      class App extends Component {
        constructor(props){
          super(props);
          this.state={
            username: '',
            password:'',
            descriptsion: '',
            sltRender:'Nữ',
            rdLanguage: 'en',
            cb: false
          };
          this.onHandleChange=this.onHandleChange.bind(this);   
          this.onChangeSubmit= this.onChangeSubmit.bind(this);
        }
        onHandleChange(event){
        var target=event.target;
        var name=target.name; //txt name and txtPassword
        var value= target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name] :value
        });
        }
        onChangeSubmit(event){
          event.preventDefault();
          console.log(this.state);
        }
        render() {
          return (
            <div className="container mt-30">
              <div className="row">
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                  <div className="panel panel-primary">
                    <div className="panel-heading">
                      <h3 className="panel-title">Form</h3>
                    </div>
                    <div className="panel-body">
                      <form onSubmit={this.onChangeSubmit}>
                        <div className="form-group">
                          <label>Username: </label>
                          <input 
                            type="text" 
                            className="form-control" 
                            name="username" 
                            onChange= { this.onHandleChange }
                            value={this.state.username}
                          />
                        </div>
                        <div className="form-group">
                          <label>Password: </label>
                          <input 
                            type="text" 
                            className="form-control" 
                            name="password" 
                            onChange= { this.onHandleChange }
                            value={this.state.password}
                          />
                        </div>
                        <div className="form-group">
                          <label>Descriptsion: </label>   
                          <textarea
                            name="descriptsion" 
                            onChange= { this.onHandleChange }
                            className="form-control" 
                            value={this.state.descriptsion}
                            >
                          </textarea>                    
                        </div>
                        <b>Sex:</b>
                        <select 
                            className="form-control" 
                            name="sltRender" 
                            value={this.state.sltRender}
                            onChange={this.onHandleChange}
                            >
                        <option value='Nữ'>Female</option>
                        <option value='Nam'>Male</option>
                        </select>  
                        <br />     
                        <b>Languages</b>                
                        
                        <div className="radio">
                          <label>
                            <input 
                              type="radio"
                              name="rdLanguage"
                              value="en"
                              onChange={this.onHandleChange}
                              checked={this.state.rdLanguage==='en'}
                              />
                           English
                          </label>
                          <br />
                          <label>
                            <input 
                              type="radio"
                              name="rdLanguage"
                              value="vi"
                              onChange={this.onHandleChange} 
                              checked={this.state.rdLanguage==='vi'}
                              />
                          VietNamese</label>
                        </div>
                        
                        <div className="checkbox">
                          <label>
                            <input 
                              type="checkbox" 
                              value={true}
                              name="cb"
                              onChange={this.onHandleChange}
                              checked={this.state.cb===true}
                              />
                            Status
                          </label>
                        </div>
                        
                        <button type="submit" className="btn btn-primary">Save</button>&nbsp;
                        <button type="reset" className="btn btn-default">Delete Space</button>                 
                      </form>

                    </div>
                  </div>
                </div>
              </div>

            </div>

          );
        }
      }

      export default App;
