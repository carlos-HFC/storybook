import { TTable } from './Table'

const Table: TTable = ({ variant, striped, border, ...props }) => {
  let classes = `table`
  classes += variant ? ` table__${variant}` : ''
  classes += striped ? ` table__striped` : ''
  classes += border ? ` table__border` : ''
  classes += props.className ? ` ${props.className}` : ''

  return (
    <table className={classes} {...props}>
      {props.children}
    </table>
  )
}

export default Table