import { observer } from "mobx-react";
import styles from './scss/rows.module.scss'
import Button from "../button/button";

interface Rows{
    rows: any[]
}

const Rows = observer(({rows}:Rows)=>{
    console.log(rows)

    return (
        <div className={styles.rows}>
        {rows.map(row=>{
            return <div className={styles.rows__row}>
                {Object.values(row).map((value: any)=>{
                    return <div className={styles.rows__value}>
                        {value}
                    </div>
                })}
                <Button size={'sm'} mod={'blue'} content={'Начать обмен'}/>
            </div>
        })}
        </div>
    )
})

export default Rows