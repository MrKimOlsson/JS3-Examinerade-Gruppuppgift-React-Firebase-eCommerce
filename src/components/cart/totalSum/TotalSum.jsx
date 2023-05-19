import React from 'react'
import './totalSum.scss'

function TotalSum() {
  return (
    <div className="totalSum-wrapper">
        <div className='totalSum-inner-wrapper'>
            <h2>Totalsumma</h2>
            <div className="ts-row">
                <p>Deltotal</p>
                <p className='bold'>941,00 kr</p>
            </div>
            <div className="ts-row">
                <p>Frakt</p>
                <p className='bold'>0,00 kr</p>
            </div>
            <div className="totalsum-calc">
                <div className="ts-row">
                    <p>Totalsumma (incl. moms)</p>
                    <p className='bold'>951,00 kr</p>
                </div>
                <button>Gå till kassan</button>
            </div>
        </div>
    </div>
  )
}

export default TotalSum