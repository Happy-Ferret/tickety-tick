module About exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)

import Messages exposing (Msg(Navigate))
import Routes exposing (Route(IndexRoute))


view : Html Msg
view =
  div []
    [ div [ class "navbar navbar-light navbar-fixed-top navbar-tt" ]
      [ div [ class "nav navbar-nav" ]
        [ a [ class "nav-link", onClick (Navigate IndexRoute) ] [ text "< back" ]
        ]
      ]
    , div [ class "content" ]
      [ div [ class "container" ]
        [ h1 [ class "h3 m-t-1 m-b-1" ]
          [ img [ src "../icons/icon-32.png", class "logo-sm", attribute "role" "presentation" ] []
          , text "tickety-tick"
          ]
        , h6 [] [ text "Usage:" ]
        , ol [ class "m-t-1 p-l-2" ]
            [ li [] [ text "Open one ore more tickets in your favourite ticket tracking system, then click the extension icon." ]
            , li [] [ text "You can then select if you want to create a commit message or a branch name based on these tickets." ]
            ]
        , p []
            [ text "This extension is open-source software by the fellows at "
            , a [ href "http://bitcrowd.net" ] [ text "bitcrowd" ]
            , text "."
            ]
        , p []
            [ text "The source code is available on "
            , a [ href "https://github.com/bitcrowd/tickety-tick" ] [ text "GitHub" ]
            , text "."
            ]
        , p [ class "small" ]
            [ text "Logo by "
            , a [ href "http://thenounproject.com/term/ticket/92194/" ] [ text "Ramón G." ]
            , text " under CC-BY 3.0"
            , br [] []
            , text "Other icons from "
            , a [ href "https://octicons.github.com/" ] [ text "GitHub Octicons" ]
            ]
          ]
        ]
      ]
