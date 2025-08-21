import React from 'react'
import styled from 'styled-components'

export default function Design(props) {
    const {user} = props

  return (
    <div>
        <MyBox user={user}>
            유저네임 : {user.username}
        </MyBox>
    </div>
  )

}

const MyBox = styled.div`
color: ${(props)=> (props.user.username == 'ssar' ? 'blue' : 'red')};
`;
