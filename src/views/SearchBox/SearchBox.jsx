import React, { Component } from 'react';
import { Input, InputAdornment, IconButton, Icon } from '@material-ui/core';
import searchBoxStyled from './SearchBox.scss'

export default class SearchBox extends Component{
    render(){
        return(
            <Input
                className={searchBoxStyled.searchbox}
                endAdornment={
                    <InputAdornment
                        position='end'
                    >
                        <IconButton
                            aria-label="search friends"
                        >
                            <Icon className={searchBoxStyled.icon}>search</Icon>
                        </IconButton>
                    </InputAdornment>

                }
            />
        )
    }
}