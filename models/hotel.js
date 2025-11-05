module.exports = (sequelize, DataTypes) => {
  const Hotel = sequelize.define(
    "hotel",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Tipe_Kamar: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Kapasitas_Tamu: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Lantai: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Fasilitas: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      Tanggal_Pesan: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
    },
    {
      tableName: "hotel",
      freezeTableName: true,
      timestamps: false,
    }
  );

  return Hotel;
};
