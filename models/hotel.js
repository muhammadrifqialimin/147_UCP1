module.exports = (Sequelize, DataTypes) => {
  const hotel = Sequelize.define(
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
        type: DataTypes.STRING,
        allowNull: false,
      },
      Tanggal_Pesan: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "hotel",
      freezeTableName: true,
      timestamps: true,
    }
  );
};
