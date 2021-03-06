package utils

import (
	"hits/api/prisma/db"
)

var globalDb *db.PrismaClient

func SetGlobalDb(client *db.PrismaClient) {
	globalDb = client
}

func GetPrisma() *db.PrismaClient {
	return globalDb
}
