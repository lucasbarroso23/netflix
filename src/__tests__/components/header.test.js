import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Header } from '../../components';

jest.mock('react-router-dom');

describe('<Header />', () => {
  it('render <Header /> with populated values', () => {
    const { container, getByText, getByAltText, getByTestId } = render(
      <Header>
        <Header.Frame>
          <Header.Logo src="/logo.svg" alt="Netflix" />
          <Header.TextLink active="true">Hello I am a link!</Header.TextLink>
        </Header.Frame>
      </Header>
    )

    expect(getByText('Hello I am a link!')).toBeTruthy();
    expect(getByTestId('header-bg')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  })
})
