CREATE TABLE public."user" (
	id integer NOT NULL,
	name varchar(255) NULL,
	email varchar(255) NULL,
	CONSTRAINT user_pk PRIMARY KEY (id)
);

-- Auto-generated SQL script #201911221219
INSERT INTO public."user" (id,"name",email)
	VALUES (1,'staff_01','staff_01');
INSERT INTO public."user" (id,"name",email)
	VALUES (2,'staff_02','staff_02');
INSERT INTO public."user" (id,"name",email)
	VALUES (3,'staff_03','staff_03');
INSERT INTO public."user" (id,"name",email)
	VALUES (4,'staff_04','staff_04');
INSERT INTO public."user" (id,"name",email)
	VALUES (5,'staff_05','staff_05');