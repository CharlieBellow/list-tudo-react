import { useContext, useState, createContext } from 'react';

interface ThemeContextProps {
  themeContext: string;
  changeThemeContext: ( themeContext: string ) => void;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeContext = createContext( {} as ThemeContextProps );

export const ThemeContextProvider = ( { children }: ThemeProviderProps ) => {
  const [ themeContext, setThemeContext ] = useState<string>( "light" )
  

  function changeThemeContext ( themeContext: string ) {
      setThemeContext("dark")
  }

  return (
    <ThemeContext.Provider value={ { themeContext: themeContext, changeThemeContext: changeThemeContext } }>
      {children}
    </ThemeContext.Provider>
  )
};

export function useThemeContext () {
  const changeTheme = useContext( ThemeContext );

  return changeTheme

}