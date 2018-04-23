import { Menu } from '../components';

const about = ({pageTitle, children}) => (
    <div>
        <Menu />
        <h1>{pageTitle}</h1>
        {children}
    </div>
)

export default about;
