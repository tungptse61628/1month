USE [master]
GO
/****** Object:  Database [agency]    Script Date: 24/5/2018 1:14:17 PM ******/
CREATE DATABASE [agency]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'agency', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.SQLEXPRESS\MSSQL\DATA\agency.mdf' , SIZE = 3072KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'agency_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.SQLEXPRESS\MSSQL\DATA\agency_log.ldf' , SIZE = 1024KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [agency] SET COMPATIBILITY_LEVEL = 120
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [agency].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [agency] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [agency] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [agency] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [agency] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [agency] SET ARITHABORT OFF 
GO
ALTER DATABASE [agency] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [agency] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [agency] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [agency] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [agency] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [agency] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [agency] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [agency] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [agency] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [agency] SET  DISABLE_BROKER 
GO
ALTER DATABASE [agency] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [agency] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [agency] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [agency] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [agency] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [agency] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [agency] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [agency] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [agency] SET  MULTI_USER 
GO
ALTER DATABASE [agency] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [agency] SET DB_CHAINING OFF 
GO
ALTER DATABASE [agency] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [agency] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
ALTER DATABASE [agency] SET DELAYED_DURABILITY = DISABLED 
GO
USE [agency]
GO
/****** Object:  Table [dbo].[Attachment]    Script Date: 24/5/2018 1:14:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Attachment](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](255) NOT NULL,
	[TaskID] [int] NOT NULL,
	[Path] [nvarchar](255) NOT NULL,
	[CreatedBy] [int] NULL,
	[CreatedTime] [datetime] NULL,
 CONSTRAINT [PK_Attachment] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Bill]    Script Date: 24/5/2018 1:14:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Bill](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Description] [varchar](max) NOT NULL,
	[Money] [int] NOT NULL,
	[Path] [nvarchar](255) NULL,
	[ProjectID] [int] NOT NULL,
 CONSTRAINT [PK_Bill] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[CheckList]    Script Date: 24/5/2018 1:14:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CheckList](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](255) NOT NULL,
	[TaskID] [int] NOT NULL,
	[ChangedBy] [int] NULL,
	[CreatedBy] [int] NOT NULL,
	[ChangedTime] [datetime] NULL,
	[CreatedTime] [datetime] NOT NULL,
 CONSTRAINT [PK_CheckList_1] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[CheckListItem]    Script Date: 24/5/2018 1:14:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CheckListItem](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](255) NOT NULL,
	[IsChecked] [bit] NOT NULL,
	[CheckListID] [int] NOT NULL,
	[ChangedBy] [int] NULL,
	[CreatedBy] [int] NULL,
	[ChangedTime] [datetime] NULL,
	[CreatedTime] [datetime] NULL,
 CONSTRAINT [PK_CheckListItem] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Comment]    Script Date: 24/5/2018 1:14:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Comment](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Body] [nvarchar](max) NULL,
	[CreatedBy] [int] NOT NULL,
	[CreatedTime] [datetime] NOT NULL,
	[ChangedTime] [datetime] NULL,
	[TaskID] [int] NOT NULL,
 CONSTRAINT [PK_Comment] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Customer]    Script Date: 24/5/2018 1:14:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Customer](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NULL,
	[Address] [nvarchar](50) NULL,
	[Description] [nvarchar](50) NULL,
 CONSTRAINT [PK_Customer] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[List]    Script Date: 24/5/2018 1:14:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[List](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[ProjectID] [int] NOT NULL,
	[Name] [nvarchar](255) NOT NULL,
	[ChangedBy] [int] NULL,
	[CreatedBy] [int] NOT NULL,
	[ChangedTime] [datetime] NULL,
	[CreatedTime] [datetime] NULL,
 CONSTRAINT [PK_List] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[ListDependency]    Script Date: 24/5/2018 1:14:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ListDependency](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[FirstDependencyListID] [int] NOT NULL,
	[LastDependencyListID] [int] NULL,
	[ChangedBy] [int] NULL,
	[CreatedBy] [int] NULL,
	[ChangedTime] [datetime] NULL,
	[CreatedTime] [datetime] NULL,
 CONSTRAINT [PK_ListDependency] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[MethodAdvertising]    Script Date: 24/5/2018 1:14:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MethodAdvertising](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nchar](10) NULL,
	[Description] [nvarchar](max) NULL,
	[CreatedBy] [int] NOT NULL,
	[CreatedTime] [datetime] NULL,
	[ChangedBy] [int] NULL,
	[ChangedTime] [datetime] NULL,
	[Status] [int] NULL,
 CONSTRAINT [PK_MethodAd] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Notification]    Script Date: 24/5/2018 1:14:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Notification](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Type] [int] NOT NULL,
	[Content] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Notification] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[NotificationUser]    Script Date: 24/5/2018 1:14:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[NotificationUser](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[UserID] [int] NOT NULL,
	[NotificationID] [int] NOT NULL,
	[IsRead] [bit] NOT NULL,
 CONSTRAINT [PK_NotificationUser] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Project]    Script Date: 24/5/2018 1:14:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Project](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](255) NOT NULL,
	[Description] [nvarchar](max) NULL,
	[Deadline] [date] NULL,
	[CreatedTime] [datetime] NOT NULL,
	[CreatedBy] [int] NOT NULL,
	[StartDate] [date] NULL,
	[ChangedBy] [int] NULL,
	[ChangedTime] [datetime] NULL,
	[Status] [int] NULL,
	[FinishedDate] [datetime] NULL,
	[CustomerID] [int] NULL,
	[Goal] [varchar](max) NOT NULL,
	[Location] [nvarchar](50) NULL,
	[Keywords] [nvarchar](50) NULL,
	[Budget] [int] NULL,
	[ChannelID] [int] NULL,
	[TimeVideo] [int] NULL,
	[TimeFrame] [nvarchar](50) NULL,
	[TypeAdID] [int] NULL,
 CONSTRAINT [PK_Project] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Task]    Script Date: 24/5/2018 1:14:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Task](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](255) NOT NULL,
	[Description] [nvarchar](max) NULL,
	[CreatedBy] [int] NOT NULL,
	[CreatedTime] [datetime] NOT NULL,
	[ChangedBy] [int] NULL,
	[ChangedTime] [datetime] NULL,
	[Status] [int] NOT NULL,
	[Duration] [int] NOT NULL,
	[ListID] [int] NOT NULL,
	[Priority] [int] NULL,
	[StartDate] [datetime] NULL,
	[FinishedDate] [datetime] NULL,
	[Effort] [int] NOT NULL,
	[IsArchived] [bit] NOT NULL,
 CONSTRAINT [PK_Task] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[TaskDependency]    Script Date: 24/5/2018 1:14:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TaskDependency](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[SourceTaskID] [int] NOT NULL,
	[DestinationTaskID] [int] NULL,
	[DependencyType] [int] NULL,
	[ChangedBy] [int] NULL,
	[CreatedBy] [int] NULL,
	[ChangedTime] [datetime] NULL,
	[CreatedTime] [datetime] NULL,
 CONSTRAINT [PK_TaskDependency] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Team]    Script Date: 24/5/2018 1:14:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Team](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](255) NOT NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [date] NOT NULL,
 CONSTRAINT [PK_Team] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[TeamProject]    Script Date: 24/5/2018 1:14:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TeamProject](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[TeamID] [int] NOT NULL,
	[ProjectID] [int] NOT NULL,
 CONSTRAINT [PK_TeamProject] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[TypeAdvertising]    Script Date: 24/5/2018 1:14:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TypeAdvertising](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NULL,
	[MethodAdvertisingID] [int] NOT NULL,
	[CreatedBy] [int] NOT NULL,
	[CreatedTime] [datetime] NULL,
	[ChangedBy] [int] NULL,
	[ChangedTime] [datetime] NULL,
	[Status] [int] NULL,
 CONSTRAINT [PK_TypeAd] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[User]    Script Date: 24/5/2018 1:14:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](255) NULL,
	[Phone] [nvarchar](255) NULL,
	[Birthdate] [date] NULL,
	[Email] [nvarchar](255) NULL,
	[Username] [nvarchar](255) NOT NULL,
	[Password] [nvarchar](255) NOT NULL,
	[Avatar] [nvarchar](255) NULL,
	[IsAdmin] [bit] NULL,
	[IsActive] [bit] NULL,
	[IsManager] [bit] NULL,
	[TeamID] [int] NULL,
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[UserProject]    Script Date: 24/5/2018 1:14:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserProject](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[UserID] [int] NOT NULL,
	[ProjectID] [int] NOT NULL,
 CONSTRAINT [PK_UserProject] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[UserTask]    Script Date: 24/5/2018 1:14:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserTask](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[TaskID] [int] NOT NULL,
	[UserID] [int] NOT NULL,
	[IsFollow] [bit] NOT NULL,
	[IsAssigned] [bit] NOT NULL,
 CONSTRAINT [PK_UserTask] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET IDENTITY_INSERT [dbo].[MethodAdvertising] ON 

INSERT [dbo].[MethodAdvertising] ([ID], [Name], [Description], [CreatedBy], [CreatedTime], [ChangedBy], [ChangedTime], [Status]) VALUES (1, N'Ấn phẩm   ', NULL, 35, NULL, NULL, NULL, NULL)
INSERT [dbo].[MethodAdvertising] ([ID], [Name], [Description], [CreatedBy], [CreatedTime], [ChangedBy], [ChangedTime], [Status]) VALUES (2, N'Khẩu hiệu ', NULL, 35, NULL, NULL, NULL, NULL)
INSERT [dbo].[MethodAdvertising] ([ID], [Name], [Description], [CreatedBy], [CreatedTime], [ChangedBy], [ChangedTime], [Status]) VALUES (6, N'TruyềnHình', NULL, 35, NULL, NULL, NULL, NULL)
INSERT [dbo].[MethodAdvertising] ([ID], [Name], [Description], [CreatedBy], [CreatedTime], [ChangedBy], [ChangedTime], [Status]) VALUES (13, N'Trực Tuyến', NULL, 35, NULL, NULL, NULL, NULL)
INSERT [dbo].[MethodAdvertising] ([ID], [Name], [Description], [CreatedBy], [CreatedTime], [ChangedBy], [ChangedTime], [Status]) VALUES (14, N'Radio     ', NULL, 35, NULL, NULL, NULL, NULL)
INSERT [dbo].[MethodAdvertising] ([ID], [Name], [Description], [CreatedBy], [CreatedTime], [ChangedBy], [ChangedTime], [Status]) VALUES (30, N'Digital   ', NULL, 35, NULL, NULL, NULL, NULL)
SET IDENTITY_INSERT [dbo].[MethodAdvertising] OFF
SET IDENTITY_INSERT [dbo].[Team] ON 

INSERT [dbo].[Team] ([ID], [Name], [CreatedBy], [CreatedDate]) VALUES (1, N'Creative team', 35, CAST(N'2013-11-11' AS Date))
INSERT [dbo].[Team] ([ID], [Name], [CreatedBy], [CreatedDate]) VALUES (2, N'Account  team', 35, CAST(N'2013-04-11' AS Date))
INSERT [dbo].[Team] ([ID], [Name], [CreatedBy], [CreatedDate]) VALUES (3, N'Production team', 35, CAST(N'2013-07-12' AS Date))
INSERT [dbo].[Team] ([ID], [Name], [CreatedBy], [CreatedDate]) VALUES (4, N'Strategic Planning team', 35, CAST(N'2013-08-30' AS Date))
INSERT [dbo].[Team] ([ID], [Name], [CreatedBy], [CreatedDate]) VALUES (7, N'Makeup team', 35, CAST(N'2017-05-19' AS Date))
INSERT [dbo].[Team] ([ID], [Name], [CreatedBy], [CreatedDate]) VALUES (9, N'Accounting team', 35, CAST(N'2017-05-19' AS Date))
INSERT [dbo].[Team] ([ID], [Name], [CreatedBy], [CreatedDate]) VALUES (10, N'Customer manage team', 35, CAST(N'2017-05-19' AS Date))
SET IDENTITY_INSERT [dbo].[Team] OFF
SET IDENTITY_INSERT [dbo].[TypeAdvertising] ON 

INSERT [dbo].[TypeAdvertising] ([ID], [Name], [MethodAdvertisingID], [CreatedBy], [CreatedTime], [ChangedBy], [ChangedTime], [Status]) VALUES (1, N'Báo', 1, 35, NULL, NULL, NULL, NULL)
INSERT [dbo].[TypeAdvertising] ([ID], [Name], [MethodAdvertisingID], [CreatedBy], [CreatedTime], [ChangedBy], [ChangedTime], [Status]) VALUES (2, N'Bưu Thiếp', 1, 35, NULL, NULL, NULL, NULL)
INSERT [dbo].[TypeAdvertising] ([ID], [Name], [MethodAdvertisingID], [CreatedBy], [CreatedTime], [ChangedBy], [ChangedTime], [Status]) VALUES (3, N'Tem thư', 1, 35, NULL, NULL, NULL, NULL)
INSERT [dbo].[TypeAdvertising] ([ID], [Name], [MethodAdvertisingID], [CreatedBy], [CreatedTime], [ChangedBy], [ChangedTime], [Status]) VALUES (4, N'Băng ron', 2, 35, NULL, NULL, NULL, NULL)
INSERT [dbo].[TypeAdvertising] ([ID], [Name], [MethodAdvertisingID], [CreatedBy], [CreatedTime], [ChangedBy], [ChangedTime], [Status]) VALUES (5, N'Poster', 2, 35, NULL, NULL, NULL, NULL)
INSERT [dbo].[TypeAdvertising] ([ID], [Name], [MethodAdvertisingID], [CreatedBy], [CreatedTime], [ChangedBy], [ChangedTime], [Status]) VALUES (6, N'Logo', 6, 35, NULL, NULL, NULL, NULL)
INSERT [dbo].[TypeAdvertising] ([ID], [Name], [MethodAdvertisingID], [CreatedBy], [CreatedTime], [ChangedBy], [ChangedTime], [Status]) VALUES (7, N'Chạy panel', 6, 35, NULL, NULL, NULL, NULL)
INSERT [dbo].[TypeAdvertising] ([ID], [Name], [MethodAdvertisingID], [CreatedBy], [CreatedTime], [ChangedBy], [ChangedTime], [Status]) VALUES (8, N'TVC', 6, 35, NULL, NULL, NULL, NULL)
INSERT [dbo].[TypeAdvertising] ([ID], [Name], [MethodAdvertisingID], [CreatedBy], [CreatedTime], [ChangedBy], [ChangedTime], [Status]) VALUES (9, N'Tài trợ chương trình', 6, 35, NULL, NULL, NULL, NULL)
INSERT [dbo].[TypeAdvertising] ([ID], [Name], [MethodAdvertisingID], [CreatedBy], [CreatedTime], [ChangedBy], [ChangedTime], [Status]) VALUES (10, N'Goole', 13, 35, NULL, NULL, NULL, NULL)
INSERT [dbo].[TypeAdvertising] ([ID], [Name], [MethodAdvertisingID], [CreatedBy], [CreatedTime], [ChangedBy], [ChangedTime], [Status]) VALUES (11, N'Facebook', 13, 35, NULL, NULL, NULL, NULL)
INSERT [dbo].[TypeAdvertising] ([ID], [Name], [MethodAdvertisingID], [CreatedBy], [CreatedTime], [ChangedBy], [ChangedTime], [Status]) VALUES (12, N'Yahoo', 13, 35, NULL, NULL, NULL, NULL)
INSERT [dbo].[TypeAdvertising] ([ID], [Name], [MethodAdvertisingID], [CreatedBy], [CreatedTime], [ChangedBy], [ChangedTime], [Status]) VALUES (13, N'Báo điện tử', 13, 35, NULL, NULL, NULL, NULL)
INSERT [dbo].[TypeAdvertising] ([ID], [Name], [MethodAdvertisingID], [CreatedBy], [CreatedTime], [ChangedBy], [ChangedTime], [Status]) VALUES (14, N'Email', 13, 35, NULL, NULL, NULL, NULL)
SET IDENTITY_INSERT [dbo].[TypeAdvertising] OFF
SET IDENTITY_INSERT [dbo].[User] ON 

INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (35, N'Admin', N'0914162689', CAST(N'1979-05-02' AS Date), N'admin@cma.com', N'admin', N'123456', N'avt1.png', 1, 1, 0, NULL)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (37, N'Creative Manager', N'01669788679', CAST(N'1985-01-15' AS Date), N'creative_manager@cma.com', N'cmanager', N'123456', N'avt2.png', 0, 1, 1, 1)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (38, N'Account Management Manager', N'0978178764', CAST(N'1988-02-04' AS Date), N'account_manager@cma.com', N'amanager', N'123456', N'avt3.png', 0, 1, 1, 2)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (40, N'Production Manager', N'0905682529', CAST(N'1979-11-29' AS Date), N'production_manager@cma.com', N'pmanager', N'123456', N'avt5.png', 0, 1, 1, 3)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (41, N'Creative Staff 1', N'0982725726', CAST(N'1988-05-19' AS Date), N'staffc1@cma.com', N'staffc1', N'123456', N'avt6.png', 0, 1, 0, 1)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (42, N'Creative Staff 2', N'0937303282', CAST(N'1985-09-12' AS Date), N'staffc2@cma.com', N'staffc2', N'123456', N'avt7.png', 0, 1, 0, 1)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (43, N'Creative Staff 3', N'0974131489', CAST(N'1985-02-09' AS Date), N'staffc3@cma.com', N'staffc3', N'123456', N'avt8.png', 0, 1, 0, 1)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (44, N'Creative Staff 4', N'0984084034', CAST(N'1984-06-07' AS Date), N'staffc4@cma.com', N'staffc4', N'123456', N'avt9.png', 0, 1, 0, 1)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (45, N'Creative Staff 5', N'0977557349', CAST(N'1986-11-25' AS Date), N'staffc5@cma.com', N'staffc5', N'123456', N'avt10.png', 0, 1, 0, 1)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (46, N'Account Management Staff 1', N'01649616718', CAST(N'1986-05-23' AS Date), N'staffa1@cma.com', N'staffa1', N'123456', N'avt11.png', 0, 1, 0, 2)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (47, N'Account Management Staff 2', N'0914162689', CAST(N'1982-10-22' AS Date), N'staffa2@cma.com', N'staffa2', N'123456', N'avt12.png', 0, 1, 0, 2)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (48, N'Account Management Staff 3', N'01272389777', CAST(N'1984-02-19' AS Date), N'staffa3@cma.com', N'staffa3', N'123456', N'avt13.png', 0, 1, 0, 2)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (49, N'Account Management Staff 4', N'0986958908', CAST(N'1987-07-08' AS Date), N'staffa4@cma.com', N'staffa4', N'123456', N'avt14.png', 0, 1, 0, 2)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (50, N'Account Management Staff 5', N'01648129157', CAST(N'1987-09-17' AS Date), N'staffa5@cma.com', N'staffa5', N'123456', N'avt15.png', 0, 1, 0, 2)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (56, N'Production Staff 1', N'01658102387', CAST(N'1976-07-15' AS Date), N'staffp1@cma.com', N'staffp1', N'123456', N'avt21.png', 0, 1, 0, 3)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (57, N'Production Staff 2', N'0983043195', CAST(N'1980-10-29' AS Date), N'staffp2@cma.com', N'staffp2', N'123456', N'avt22.png', 0, 1, 0, 3)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (58, N'Production Staff 3', N'0976388281', CAST(N'1981-12-15' AS Date), N'staffp3@cma.com', N'staffp3', N'123456', N'avt23.png', 0, 1, 0, 3)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (59, N'Production Staff 4', N'01656077128', CAST(N'1985-10-05' AS Date), N'staffp4@cma.com', N'staffp4', N'123456', N'avt24.png', 0, 1, 0, 3)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (60, N'Production Staff 5', N'0976096113', CAST(N'1987-01-17' AS Date), N'staffp5@cma.com', N'staffp5', N'123456', N'avt25.png', 0, 1, 0, 3)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (62, N'Nguyen Van B', N'0123456789', CAST(N'1993-03-18' AS Date), N'user2@cma.com', N'user2', N'123456', NULL, 0, 0, 0, NULL)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (63, N'Huynh Van C', N'0123456789', CAST(N'1994-04-19' AS Date), N'user3@cma.com', N'user3', N'123456', NULL, 0, 0, 0, NULL)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (64, N'Strategic Planning Manager', N'0979809204', CAST(N'1983-03-29' AS Date), N'strategic_manager@cma.com', N'smanager', N'123456', N'avt4.png', 0, 1, 1, 4)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (70, N'Strategic Planning Staff 1', N'01673433886', CAST(N'1988-03-09' AS Date), N'staffs1@cma.com', N'staffs1', N'123456', N'avt16.png', 0, 1, 0, 4)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (71, N'Strategic Planning Staff 2', N'0988753023', CAST(N'1979-05-02' AS Date), N'staffs2@cma.com', N'staffs2', N'123456', N'avt17.png', 0, 1, 0, 4)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (72, N'Strategic Planning Staff 3', N'01656077115', CAST(N'1988-07-25' AS Date), N'staffs3@cma.com', N'staffs3', N'123456', N'avt18.png', 0, 1, 0, 4)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (73, N'Strategic Planning Staff 4', N'0972907579', CAST(N'1985-10-24' AS Date), N'staffs4@cma.com', N'staffs4', N'123456', N'avt19.png', 0, 1, 0, 4)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (74, N'Strategic Planning Staff 5', N'0904054732', CAST(N'1987-05-01' AS Date), N'staffs5@cma.com', N'staffs5', N'123456', N'avt20.png', 0, 1, 0, 4)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (75, N'aaa', N'132456789', CAST(N'1994-06-01' AS Date), N'a@abc.com', N'aaa', N'123456', NULL, 0, 1, 0, 10)
SET IDENTITY_INSERT [dbo].[User] OFF
ALTER TABLE [dbo].[Attachment]  WITH CHECK ADD  CONSTRAINT [FK_Attachment_Task] FOREIGN KEY([TaskID])
REFERENCES [dbo].[Task] ([ID])
GO
ALTER TABLE [dbo].[Attachment] CHECK CONSTRAINT [FK_Attachment_Task]
GO
ALTER TABLE [dbo].[Bill]  WITH CHECK ADD  CONSTRAINT [FK_Bill_Project] FOREIGN KEY([ProjectID])
REFERENCES [dbo].[Project] ([ID])
GO
ALTER TABLE [dbo].[Bill] CHECK CONSTRAINT [FK_Bill_Project]
GO
ALTER TABLE [dbo].[CheckList]  WITH CHECK ADD  CONSTRAINT [FK_CheckList_Task] FOREIGN KEY([TaskID])
REFERENCES [dbo].[Task] ([ID])
GO
ALTER TABLE [dbo].[CheckList] CHECK CONSTRAINT [FK_CheckList_Task]
GO
ALTER TABLE [dbo].[CheckListItem]  WITH CHECK ADD  CONSTRAINT [FK_CheckListItem_CheckList] FOREIGN KEY([CheckListID])
REFERENCES [dbo].[CheckList] ([ID])
GO
ALTER TABLE [dbo].[CheckListItem] CHECK CONSTRAINT [FK_CheckListItem_CheckList]
GO
ALTER TABLE [dbo].[Comment]  WITH CHECK ADD  CONSTRAINT [FK_Comment_Task] FOREIGN KEY([TaskID])
REFERENCES [dbo].[Task] ([ID])
GO
ALTER TABLE [dbo].[Comment] CHECK CONSTRAINT [FK_Comment_Task]
GO
ALTER TABLE [dbo].[List]  WITH CHECK ADD  CONSTRAINT [FK_List_Project] FOREIGN KEY([ProjectID])
REFERENCES [dbo].[Project] ([ID])
GO
ALTER TABLE [dbo].[List] CHECK CONSTRAINT [FK_List_Project]
GO
ALTER TABLE [dbo].[NotificationUser]  WITH CHECK ADD  CONSTRAINT [FK_NotificationUser_Notification] FOREIGN KEY([NotificationID])
REFERENCES [dbo].[Notification] ([ID])
GO
ALTER TABLE [dbo].[NotificationUser] CHECK CONSTRAINT [FK_NotificationUser_Notification]
GO
ALTER TABLE [dbo].[NotificationUser]  WITH CHECK ADD  CONSTRAINT [FK_NotificationUser_User] FOREIGN KEY([UserID])
REFERENCES [dbo].[User] ([ID])
GO
ALTER TABLE [dbo].[NotificationUser] CHECK CONSTRAINT [FK_NotificationUser_User]
GO
ALTER TABLE [dbo].[Project]  WITH CHECK ADD  CONSTRAINT [FK_Project_Customer] FOREIGN KEY([CustomerID])
REFERENCES [dbo].[Customer] ([ID])
GO
ALTER TABLE [dbo].[Project] CHECK CONSTRAINT [FK_Project_Customer]
GO
ALTER TABLE [dbo].[Project]  WITH CHECK ADD  CONSTRAINT [FK_ProjectCampain_TypeAd] FOREIGN KEY([TypeAdID])
REFERENCES [dbo].[TypeAdvertising] ([ID])
GO
ALTER TABLE [dbo].[Project] CHECK CONSTRAINT [FK_ProjectCampain_TypeAd]
GO
ALTER TABLE [dbo].[Task]  WITH CHECK ADD  CONSTRAINT [FK_Task_List] FOREIGN KEY([ListID])
REFERENCES [dbo].[List] ([ID])
GO
ALTER TABLE [dbo].[Task] CHECK CONSTRAINT [FK_Task_List]
GO
ALTER TABLE [dbo].[TaskDependency]  WITH CHECK ADD  CONSTRAINT [FK_TaskDependency_Task] FOREIGN KEY([SourceTaskID])
REFERENCES [dbo].[Task] ([ID])
GO
ALTER TABLE [dbo].[TaskDependency] CHECK CONSTRAINT [FK_TaskDependency_Task]
GO
ALTER TABLE [dbo].[TaskDependency]  WITH CHECK ADD  CONSTRAINT [FK_TaskDependency_Task1] FOREIGN KEY([DestinationTaskID])
REFERENCES [dbo].[Task] ([ID])
GO
ALTER TABLE [dbo].[TaskDependency] CHECK CONSTRAINT [FK_TaskDependency_Task1]
GO
ALTER TABLE [dbo].[TeamProject]  WITH CHECK ADD  CONSTRAINT [FK_TeamProject_Project] FOREIGN KEY([ProjectID])
REFERENCES [dbo].[Project] ([ID])
GO
ALTER TABLE [dbo].[TeamProject] CHECK CONSTRAINT [FK_TeamProject_Project]
GO
ALTER TABLE [dbo].[TeamProject]  WITH CHECK ADD  CONSTRAINT [FK_TeamProject_Team] FOREIGN KEY([TeamID])
REFERENCES [dbo].[Team] ([ID])
GO
ALTER TABLE [dbo].[TeamProject] CHECK CONSTRAINT [FK_TeamProject_Team]
GO
ALTER TABLE [dbo].[TypeAdvertising]  WITH CHECK ADD  CONSTRAINT [FK_TypeAd_MethodAd] FOREIGN KEY([MethodAdvertisingID])
REFERENCES [dbo].[MethodAdvertising] ([ID])
GO
ALTER TABLE [dbo].[TypeAdvertising] CHECK CONSTRAINT [FK_TypeAd_MethodAd]
GO
ALTER TABLE [dbo].[User]  WITH CHECK ADD  CONSTRAINT [FK_User_Team] FOREIGN KEY([TeamID])
REFERENCES [dbo].[Team] ([ID])
GO
ALTER TABLE [dbo].[User] CHECK CONSTRAINT [FK_User_Team]
GO
ALTER TABLE [dbo].[UserProject]  WITH CHECK ADD  CONSTRAINT [FK_UserProject_Project] FOREIGN KEY([ProjectID])
REFERENCES [dbo].[Project] ([ID])
GO
ALTER TABLE [dbo].[UserProject] CHECK CONSTRAINT [FK_UserProject_Project]
GO
ALTER TABLE [dbo].[UserProject]  WITH CHECK ADD  CONSTRAINT [FK_UserProject_User] FOREIGN KEY([UserID])
REFERENCES [dbo].[User] ([ID])
GO
ALTER TABLE [dbo].[UserProject] CHECK CONSTRAINT [FK_UserProject_User]
GO
ALTER TABLE [dbo].[UserTask]  WITH CHECK ADD  CONSTRAINT [FK_UserTask_Task] FOREIGN KEY([TaskID])
REFERENCES [dbo].[Task] ([ID])
GO
ALTER TABLE [dbo].[UserTask] CHECK CONSTRAINT [FK_UserTask_Task]
GO
ALTER TABLE [dbo].[UserTask]  WITH CHECK ADD  CONSTRAINT [FK_UserTask_User] FOREIGN KEY([UserID])
REFERENCES [dbo].[User] ([ID])
GO
ALTER TABLE [dbo].[UserTask] CHECK CONSTRAINT [FK_UserTask_User]
GO
USE [master]
GO
ALTER DATABASE [agency] SET  READ_WRITE 
GO
