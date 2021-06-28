USE PRSCapstoneDb;
/*
--User Data
INSERT Users (Username, Password, Firstname, Lastname, Phone, Email, IsReviewer, IsAdmin)
	VALUES ('zpoindexter', 'besterdexter97', 'Zha''Quon', 'Poindexter', '3049328835','zpoindexter@tql.com', 1, 1);

INSERT Users (Username, Password, Firstname, Lastname, Phone, Email, IsReviewer, IsAdmin)
	VALUES ('KanyeWest', 'ilovekanye', 'Greatest', 'Ever', '3045159192002','kwest@tql.com', 1, 0);

INSERT Users (Username, Password, Firstname, Lastname, Phone, Email, IsReviewer, IsAdmin)
	VALUES ('MrT', 'IPITYTHEFOOL', 'MISTER', 'T', '5137312600','mrt@tql.com', 1, 1);
--Lock everything in
go

--Vendor Data
INSERT Vendors(Code, Name, Address, City, State, Zip, Phone, Email)
	VALUES ('AMZ', 'Amazon', '543 Amazon Drive', 'Cincinnati', 'OH', '45101', '5138539258', 'amazon@bezos.com' );

INSERT Vendors(Code, Name, Address, City, State, Zip, Phone, Email)
	VALUES ('WAL', 'Walmart', '123 Walmart Ave', 'Cincinnati', 'OH', '45513', '5138283910', 'walmart@quality.com' );

INSERT Vendors(Code, Name, Address, City, State, Zip, Phone, Email)
	VALUES ('BES', 'Best Buy', '9 Best Buy Lane', 'Columbus', 'OH', '45122', '5128238930', 'bestbuy@tech.com' );

--Lock everything in
go
declare @amazon varchar(10)
SELECT @amazon = Id From Vendors where Code = 'AMZ';

declare @walmart varchar(10)
SELECT @walmart = Id From Vendors where Code = 'WAL';

declare @bestbuy varchar(10)
SELECT @bestbuy = Id From Vendors where Code = 'BES';

INSERT Products (PartNbr, Name, Price, Unit, PhotoPath, VendorId)
	VALUES (110, 'Echo', 100, 'Each', null, @amazon);

INSERT Products (PartNbr, Name, Price, Unit, PhotoPath, VendorId)
	VALUES (110, 'Echo', 100, 'Each', null, @amazon);
	
INSERT Products (PartNbr, Name, Price, Unit, PhotoPath, VendorId)
	VALUES (110, 'Echo', 100, 'Each', null, @amazon);
--Lock everything in
go