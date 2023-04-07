module.exports = (salesmanDB) => {
    const { id, name, address, email, phone, enable, createdAt, updatedAt, bossId, feedbacks } = salesmanDB.dataValues
    const scores = feedbacks.map(f => f.dataValues.score)
    const sum = scores.reduce((acc, curr) => acc + curr, 0);
    const avgFeedback = sum / scores.length;
    return {
        "id": id,
        "name": name,
        "address": address,
        "email": email,
        "phone": phone,
        "enable": enable,
        "createdAt": createdAt,
        "updatedAt": updatedAt,
        "bossId": bossId,
        "avgFeedback": avgFeedback
    }
}