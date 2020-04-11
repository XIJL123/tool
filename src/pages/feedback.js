import React from 'react'
import { updateSpinners, snackbar } from 'mdui'

import {
    Input
} from 'mdui-in-react'

export default class Ui extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	contact:'',
            content:''
        }       
    }
    componentDidMount() {
        updateSpinners()
    }
    sendData(){
        const { content, contact } = this.state  
        const { submit } = this;
        submit.disabled = true;      
        fetch('http://api.ygktool.cn/ygktool/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    content:content,
                    contact:contact
                })
            })
            .then(res => res.json())
            .then(json => {
                submit.disabled = false;    
                snackbar({message:'提交成功，我会尽快处理^_^'})                 
            })
    }
    render(){
        window.titleRef.innerText = '意见反馈'
        const { content, contact } = this.state
    	return(
            <div className="mdui-col-md-10">
                <Input
                    onValueChange={newText=>{
                        this.setState({contact:newText})
                    }}
                    header="联系方式"
                    placeholder="例 QQ:1985386335"
                    value={contact}
                />
                <Input
                    onValueChange={newText=>{
                        this.setState({content:newText})
                    }}
                    placeholder="内容"
                    value={content}
                    rows="5"
                />             
                <button 
                    onClick={()=>{
                        this.sendData()
                    }}
                    ref={r => this.submit = r}
                    className="mdui-color-theme mdui-btn mdui-btn-raised">
                    提交
                </button>
            </div>
        )
    }
}