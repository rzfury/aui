import { PropsWithChildren } from 'react';
import { AUIThemeContext } from './context';

export function AUIThemeProvider({ children }: PropsWithChildren) {
  return (
    <AUIThemeContext.Provider
      value={{
        isUsingThemeProvider: true,
      }}
    >
      <div data-aui data-aui-typography>
        {children}
      </div>
    </AUIThemeContext.Provider>
  )
}
