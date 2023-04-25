import { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import { Cart } from '../context/Context';

const ItemsSelect = (props) => {
    // const { state, dispatch } = useContext(Cart)
    const { value, items, onChange } = props
    return (
        <Form.Select value={value} onChange={onChange}>
            {
                [...Array(items).keys()].map((x) => {
                    { console.log(x + 1) }
                    return (
                        <option key={x + 1}>{x + 1}</option>
                    )

                })
            }
        </Form.Select>
    );
}

export default ItemsSelect;