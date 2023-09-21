import React from 'react'

export default function HeaderText() {
    var title = String.raw`    The Gallery 
            of
          Irina 
    Chernyahovsky`;
    return (
        <div className='headerBack' style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
        }}>
            <pre className='shine'>
                {title}
            </pre>
        </div>

    )
}

