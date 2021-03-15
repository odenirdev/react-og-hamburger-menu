import styled from 'styled-components'

interface Props {
  color?: string
}

export const Container = styled.div`
  position: relative;

  padding: 3vh 1vh;

  width: fit-content;

  cursor: pointer;

  .burger-switcher {
    width: 32px;
    height: 4px;

    background-color: ${(props: Props) => props.color || '#000'};
    border-radius: 5px;

    transition: all 0.5s ease-in-out;
  }

  .burger-switcher::before,
  .burger-switcher::after {
    content: '';
    position: absolute;
    width: 32px;
    height: 4px;

    background-color: ${(props: Props) => props.color || '#000'};
    border-radius: 5px;

    transition: all 0.5s ease-in-out;
  }

  .burger-switcher::before {
    transform: translateY(-12px);
  }

  .burger-switcher::after {
    transform: translateY(12px);
  }

  &.open .burger-switcher {
    background: transparent;
  }

  &.open .burger-switcher::before {
    transform: rotate(45deg);
  }

  &.open .burger-switcher::after {
    transform: rotate(-45deg);
  }
`
