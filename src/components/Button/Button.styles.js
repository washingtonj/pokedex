import styled from 'styled-components'
import { Colors } from '../../styles/Colors'
import { Description } from '../../styles/Typography'

export const Button = {
  Container: styled.View.attrs({
    shadowColor: Colors.psychic.type,
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.35,
    shadowRadius: 6.22,
  })`
    width: 50%;
    height: 60px;
    border-radius: 10px;
  `,

  Wrapper: styled.TouchableOpacity`
    background: ${Colors.psychic.type};
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 10px;
  `,

  Title: styled(Description)`
    color: white;
  `,
};