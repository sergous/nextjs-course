const menu = (active) => (
    <div>
        <h3>Menu</h3>
        <ul>
            <li>
                <a href='/'>{active === 'home'
                    ? (<b>Home</b>) 
                    : 'Home'}
                </a>
            </li>
            <li>
                <a href='/about'>{active === 'about'
                    ? (<b>About</b>) 
                    : 'About'}
                </a>
            </li>
        </ul>
    </div>
)

export default menu;
