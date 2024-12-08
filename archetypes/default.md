+++
date = '{{ .Date.Format "January 2, 2006" }}'
draft = true
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
+++
