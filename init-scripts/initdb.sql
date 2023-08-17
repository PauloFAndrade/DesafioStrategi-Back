UPDATE pg_database SET datcollate = 'pt_BR.utf8', datctype = 'pt_BR.utf8' WHERE datname = 'imobiliaria';

ALTER DATABASE imobiliaria SET datestyle TO 'ISO, DMY';

ALTER DATABASE imobiliaria SET TIME ZONE 'America/Sao_Paulo';