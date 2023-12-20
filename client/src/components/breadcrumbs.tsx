import { useBreadcrumbItem, useBreadcrumbs } from 'react-aria';


export default function BreadcrumbItem(props) {
    let ref = React.useRef(null);
    let { itemProps } = useBreadcrumbItem(props, ref);
    return (
        <li>
            <a
                {...itemProps}
                ref={ref}
                href={props.href}
                style={{
                    color: props.isDisabled ? 'var(--gray)' : 'var(--blue)',
                    textDecoration: props.isCurrent || props.isDisabled
                        ? 'none'
                        : 'underline',
                    fontWeight: props.isCurrent ? 'bold' : null,
                    cursor: props.isCurrent || props.isDisabled ? 'default' : 'pointer'
                }}
            >
                {props.children}
            </a>
            {!props.isCurrent &&
                <span aria-hidden="true" style={{ padding: '0 5px' }}>{'›'}</span>}
        </li>
    );
}
