import { withRouter } from 'next/router';
import styled from 'react-emotion';
import Link from 'next/link';

const Li = styled('li')`
    font-weight: ${({isActive}) => isActive
        ? 'bold' 
        : 'normal'
    };
`;

const MenuItem = ({router, href, children}) => (
    <Li isActive={href === router.pathname}>
        <Link href={href}>
            <a>{children}</a>
        </Link>
    </Li>
)

export default withRouter(MenuItem);