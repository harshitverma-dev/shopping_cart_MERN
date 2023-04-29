import Form from 'react-bootstrap/Form';

const ItemsSelect = (props) => {
    const { value, items, onChange } = props
    return (
        <Form.Select value={value} onChange={onChange}>
            {
                [...Array(items).keys()].map((x) => {
                    return (
                        <option key={x + 1}>{x + 1}</option>
                    )

                })
            }
        </Form.Select>
    );
}

export default ItemsSelect;