class Toggle extends React.Component{
    constructor(props){
        super(props); 
        this.HandelOnDetails = this.HandelOnDetails.bind(this); 
        this.state = {
            isToggle: false
        }; 
    }
    HandelOnDetails(){
        this.setState((prevState) => {
            return {
                isToggle: !prevState.isToggle
            };
        });
    }
    render(){
        return (
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.HandelOnDetails}>{this.state.isToggle ? 'hide details' : 'show details'}</button>
            {this.state.isToggle && (
                <div>
                    <p>Hey. These are some of the details that you can see!</p>
                </div>
            )}
            </div>
        );
    }
}

ReactDOM.render(<Toggle />, document.getElementById('app'));


// console.log('build-it-visible.js is running'); 

// const appRoot = document.getElementById('app');

// let isToggle = false ; 

// const onDetails = () => {
//     isToggle = !isToggle;
//     render(); 
// }

// const render = () => {
//     const tempelate = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={onDetails}>{isToggle ? 'hide details' : 'show details'}</button>
//             {isToggle && (
//                 <div>
//                     <p>Hey. These are some of the details that you can see!</p>
//                 </div>
//             )}
//         </div>
//     );
    
//     ReactDOM.render(tempelate, appRoot); 
// }

// render() ; 