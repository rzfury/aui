import { ParentProps } from 'solid-js';
import { AUIThemeContext } from './context';

export function AUIThemeProvider({ children }: ParentProps) {
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
