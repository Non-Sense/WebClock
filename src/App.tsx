import React, {useEffect, useState} from 'react';
import './App.css';
import {CssBaseline, Grid, Typography} from "@mui/material";

import {createTheme, ThemeProvider} from "@mui/material";

function App() {
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            background: {
                default: "#000"
            }
        },
    });
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1);
        return () => clearInterval(timer);
    }, [date]);
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    return (
        <div className="App">
            <ThemeProvider theme={darkTheme}>
                <CssBaseline/>
                <Grid
                    container
                    spacing={0}
                    alignItems="center"
                    justifyContent="center"
                    sx={{width: "100%", minHeight: "100vh"}}
                >
                    <Grid xs={12}>
                        <Typography variant="body1" fontFamily="JetBrains Mono"
                                    textAlign={"left"}>UTC{date.getTimezoneOffset() >= 0 ? "+" : ""}{date.getTimezoneOffset() / 60}</Typography>
                        <Typography variant="h4"
                                    fontFamily="JetBrains Mono">{date.getFullYear()}/{(date.getMonth()+1).toString().padStart(2, '0')}/{date.getDate().toString().padStart(2, '0')} ({days[date.getDay()]})</Typography>
                        <Typography variant="h2"
                                    fontFamily="JetBrains Mono">{date.getHours().toString().padStart(2, '0')}:{date.getMinutes().toString().padStart(2, '0')}:{date.getSeconds().toString().padStart(2, '0')}.{date.getMilliseconds().toString().padStart(3, '0')}</Typography>
                        <p></p>

                        <Typography variant="body1" fontFamily="JetBrains Mono" textAlign={"left"}>UTC</Typography>
                        <Typography variant="h6"
                                    fontFamily="JetBrains Mono">{date.getUTCFullYear()}/{(date.getUTCMonth()+1).toString().padStart(2, '0')}/{date.getUTCDate().toString().padStart(2, '0')} ({days[date.getUTCDay()]})</Typography>
                        <Typography variant="h4"
                                    fontFamily="JetBrains Mono">{date.getUTCHours().toString().padStart(2, '0')}:{date.getUTCMinutes().toString().padStart(2, '0')}:{date.getUTCSeconds().toString().padStart(2, '0')}.{date.getUTCMilliseconds().toString().padStart(3, '0')}</Typography>
                        <p></p>
                        <Typography variant="body1" fontFamily="JetBrains Mono" textAlign={"left"}>UNIX</Typography>
                        <Typography variant="h5"
                                    fontFamily="JetBrains Mono">{(date.getTime() / 1000).toFixed(3)}</Typography>
                    </Grid>
                </Grid>
            </ThemeProvider>

        </div>
    );
}

export default App;
