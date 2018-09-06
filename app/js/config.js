'use strict';

angular.module('config', [])
  .constant('config', {
    'endpoint': "https://alerta.incubator.agoralab.co/api",
    'provider'        : "basic", // google, github, gitlab, keycloak, pingfederate, saml2 or basic
    'client_id' : '',
    'colors': {}
  });
