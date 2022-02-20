import React from 'react';
import './App.css';

const App = () => {

    return (
        <div className="wrapper">
            {/* <p>About me:</p>
          <div className="about_me">
              <div><span>First name: </span>Taymuraz</div>
              <div><span>last name: </span>Suanov</div>
              <div><span>Education: </span>higher education, law degree</div>
              <div><span>Programming language: </span>javaScript</div>
              <div><span>English level: </span>intermediate</div>
              <div><span>Sex: </span>male</div>
              <div><span>E-mail: </span> <a href="staymuraz@gmail.com">staymuraz@gmail.com</a></div>
          </div> */}
            <h1>Projects</h1>
            <div className="projects">
                <div className="projects_blocks">
                    <div className="explane"><span className="number">1.</span>
                        Социальная сеть с авторизацией. <br/>
                        <ul>
                            <li>Данные получает с реального API, фронтенд часть полнотью моя.</li>
                            <li>Используется: <strong>Redux</strong>, <strong>React-Redux</strong>, а соответственно и <strong>Редюсеры</strong>, приимущественно <strong>классовые компоненты, <strong>Thunks</strong>, контекнеры, Роутеры. Пагинация. Лоудинг. </strong></li>
                            <li> Для обработки и валидации форм используется <strong>ReduxForm</strong>. Для запросов на сервер используется <strong>axios.</strong></li>
                        </ul>
                        <div>
                            <strong style={{color: "red"}}>Email:</strong> free@samuraijs.com
                        </div>
                        <div>
                            <strong style={{color: "red"}}>Password:</strong> free
                        </div>
                    </div>
                    <div className="technologies">
                        <div><span>ссылка </span><a target="_blank" href="https://suanchik.github.io/suanchik-demo/#/">suanchik</a></div>
                        <div><span>technologies: </span>(React, redux, react-redux, axios, router-dom, withRouter, thunk, Hooks(useState, useEffect), Connect, Compose, Redux-form, lazy, Suspense, classnames).</div>
                    </div>
                </div>
                <hr/>
                <div className="projects_blocks">
                    <div className="explane"><span className="number">2.</span>
                    Интернет магазин.
                    <ul>
                            <li> Используется: <strong><strong>Redux</strong>, React-Redux, Редюсеры, функциональные компоненты, <strong>hooks</strong>.</strong></li>
                            <li>Для запросов на сервер используется axios. Используется <strong>json-server</strong> для имитации <strong>api</strong>.</li>
                            <li>Предусмотрена сортировка пицц, по алфавиту, по цене.</li>
                        </ul>
                    </div>
                    <div className="technologies">
                        <div><span>ссылка </span><a target="_blank" href="https://pizzastor-react.herokuapp.com/">Pizza Shop</a></div>
                        <div ><span>technologies: </span>(React, redux, react-redux, axios, reducers, router-dom, thunk Hooks(useState, useEffect, useSelectors, useDispatch), classNamenames)</div>
                    </div>
                </div>
                <hr/>
                <div className="projects_blocks">
                    <div className="explane"><span className="number">3.</span>
                        Приложение-игра. <br/> Отдаленно напоминает как кросворд так и известную телепередачу "Поле чудес".
                    </div>
                    <div className="technologies">
                        <div><span>ссылка </span><a target="_blank" href="https://suanchik.github.io/game-guessword/">Crossword</a></div>
                        <div ><span>technologies: </span>(React, Hooks(useState, useEffect)</div>
                    </div>
                </div>
                <hr/>
                <div className="projects_blocks">
                    <div className="explane"><span className="number">4.</span>
                        Список задач с использованием <strong>json-server</strong>. <br/>
                        Добовление подзадач для каждой задачи.
                    </div>
                    <div className="technologies">
                        <div><span>ссылка </span><a target="_blank" href="https://react-listtasks.herokuapp.com/">To-do list</a></div>
                        <div ><span>technologies: </span>(React, axios, historyApi, thunk Hooks(useState, useEffect), classNamenames)</div>
                    </div>
                </div>
                <hr/>
                <div className="projects_blocks">
                    <div className="explane"><span className="number">5.</span>
                    Приложние со списком слов для изучения английского.
                    <ul>
                        <li>Есть возможность добавлять слова и добавлять к ним описание.</li>
                    </ul>
                    </div>
                    <div className="technologies">
                        <div><span>ссылка </span><a target="_blank" href="https://react-englishcards.herokuapp.com/">English cards</a></div>
                        <div ><span>technologies: </span>(React, react-redux, axios, Hooks(useState, useEffect, useSelectors, useDispatch))</div>
                    </div>
                </div>
                <hr/>
                <div className="projects_blocks">
                    <div className="explane"><span className="number">6.</span>
                        Простые списки задач.
                    </div>
                    <div className="technologies">
                        <div><span>ссылка </span><a target="_blank" href="https://suanchik.github.io/simpleTasks/">Tasks</a></div>
                        <div ><span>technologies: </span>(React, redux, react-redux, reducers, Hooks(useState, useEffect, useSelectors, useDispatch))</div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default App;