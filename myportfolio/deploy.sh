#!/bin/bash

ng build --configuration production --base-href "/"

ng deploy --base-href="https://wafaeelmansouri.com/" --no-silent
