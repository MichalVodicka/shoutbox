create table meta
(
	id serial not null
		constraint "PK_c4c17a6c2bd7651338b60fc590b"
			primary key,
	ip varchar not null,
	user_agent varchar not null
);


create table message
(
	id serial not null
		constraint "PK_ba01f0a3e0123651915008bc578"
			primary key,
	message varchar not null,
	name varchar not null,
	meta_id integer not null
		constraint "FK_219262181fa8fe58706fe4347cc"
			references meta,
	created_at timestamp with time zone not null
);
