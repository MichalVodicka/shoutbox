create table message
(
	id serial not null
		constraint "PK_ba01f0a3e0123651915008bc578"
			primary key,
	message varchar not null,
	name varchar not null,
	ip varchar not null,
	user_agent varchar not null
	created_at timestamp with time zone not null
);
