import "../App.css"

export default function TaskCard(props){
    
   
        return (
            <div>
         
        {props.todos.map((t, index) => (
            
          <article key={t.task}>
            <label className="todo">
              <input
              id="todo"
              className="check-box"
                type="checkbox"
                name="done"
                value={props.todos.done}
                onChange={props.handleClick}
              />
              <h2>{index + 1} <span className="task">{t.task}</span></h2>
            </label>
            <hr />
          </article>
        ))}
        </div>
        )
    }
