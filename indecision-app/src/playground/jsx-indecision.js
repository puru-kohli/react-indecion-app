console.log('App.js is running');

const app = {
    title: 'indecision app',
    subtitle: 'something new',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault() ; 

    const option = e.target.elements.option.value;
    
    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const onRemoveAll = () => {
    app.options = []; 
    render();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option); 
}

const appRoot = document.getElementById('app');

const render = () => {
    const tempelate = ( 
        <div>
            <h1>{app.title}</h1> 
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'here are your options' : 'no options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                { 
                    app.options.map((option) => <li key={option}>{option}</li>) 
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add option</button>
            </form>
        </div>
        );
    
    ReactDOM.render(tempelate, appRoot);
}

render();

