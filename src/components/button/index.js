import{ useState } from 'react';
import styled from 'styled-components'

const Button = styled.button`
    border: 0;
    padding: 0 0.9rem;
    max-height: 6rem;
    transition: max-height 150ms, padding 300ms;
    background-color: transparent;
    display: flex;
    cursor: pointer;
    box-shadow: 1px 3px 6px 0 rgb(0 0 0 / 20%);
    -moz-box-shadow: 1px 3px 6px 0 rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: 1px 3px 6px 0 rgb(0 0 0 / 20%);
    font-size: 0.7rem;
    flex-direction: column;
    align-items: center;
    color: ${({ active }) => active ? 'rgb(249, 197, 52)' : 'rgb(232, 230, 227)'};
    &:hover, 
    &:hover * {
        color: rgb(249, 197, 52) !important;
        stroke: rgb(249, 197, 52) !important;
        fill: rgb(249, 197, 52) !important;
    }
    svg {
        stroke: ${({ active }) => active ? 'rgb(249, 197, 52)' : 'rgb(232, 230, 227)'};
        fill: ${({ active }) => active ? 'rgb(249, 197, 52)' : 'rgb(232, 230, 227)'};
        height: 1.7rem;
        width: 1.8rem;
    }
`;

const Label = styled.span`
    margin-top: 4px;
`

export default function ActionButton({
    className,
    children,
    labelKey,
    onClick,
    activate = false, // change activation from parent
    toggling = true // enable toggling
}) {

    const [active, setActive] = useState(false)

    return <Button
        type="button"
        className={className}
        active={(active && toggling) || activate}
        onClick={e => {
            setActive(x => !x)
            onClick && onClick(e)
        }}>
        {children}
        {labelKey && <Label>{(labelKey)}</Label>}
    </Button>
}