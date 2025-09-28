export function FAQ() {
    const faqs = [
      {
        question: "Sanayi Cebimde nedir?",
        answer: "Sanayi Cebimde, aracınız için güvenilir ustaları kolayca bulabileceğiniz bir platformdur."
      },
      {
        question: "Teklif almak ücretsiz mi?",
        answer: "Evet, Sanayi Cebimde üzerinden teklif almak tamamen ücretsizdir."
      },
      {
        question: "Hangi şehirlerde hizmet veriyorsunuz?",
        answer: "Şu anda İzmir, Ankara, Bursa ve çevresinde hizmet vermekteyiz."
      },
      {
        question: "Paket iptali nasıl yapılır?",
        answer: "Hesabınızdan istediğiniz zaman paket iptal işlemini gerçekleştirebilirsiniz."
      },
    ]
  
    return (
      <section className="py-16 max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Sık Sorulan Sorular</h2>
        <div tabIndex={0} className="collapse collapse-arrow border border-base-300  rounded-box mb-4">
          {faqs.map(({question, answer}, idx) => (
            <div key={idx} className="collapse collapse-arrow border border-base-300  rounded-box mb-4">
              <input type="checkbox" className="peer" />
              <div className="collapse-title text-lg font-medium">
                {question}
              </div>
              <div className="collapse-content">
                <p>{answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
  