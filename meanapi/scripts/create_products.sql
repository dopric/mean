USE [mean]
GO

/****** Object:  Table [dbo].[products]    Script Date: 03.06.2020 13:23:52 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[products](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](100) NULL,
	[sku] [varchar](20) NULL,
	[price] [decimal](8, 2) NOT NULL,
	[is_active] [tinyint] NOT NULL,
	[created_at] [datetime] NOT NULL
) ON [PRIMARY]
GO


