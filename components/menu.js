import { MenuItem } from '.'

const menu = () => (
    <div>
        <h3>Menu</h3>
        <ul>
            <MenuItem href='/'>Home</MenuItem>
            <MenuItem href='/about'>About</MenuItem>
        </ul>
    </div>
)

export default menu;
