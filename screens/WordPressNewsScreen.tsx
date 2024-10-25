import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Linking, ScrollView } from 'react-native';

// Función para decodificar entidades HTML
const decodeHtmlEntities = (text: string) => {
  if (!text) return text;
  
  return text
    .replace(/&#8216;/g, "'")
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8230;/g, '...')
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
};

const WordPressNewsScreen = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://www.thesun.co.uk/wp-json/wp/v2/posts?per_page=3');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
        setError('Error fetching news');
      }
    };

    fetchNews();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'data:image/webp;base64,UklGRuYEAABXRUJQVlA4INoEAAAQHACdASo4ADgAPiUKiUShkNDPeBgCRLYATpl9nxvQ/xA/Zn+7/JjVv6b97f3H/wvRSoK7Jf0n3He8T1RfbN6hX9y/Hftd+YD+W/zH/S/6P3xv5n6gP+r6gH9Z/2nWIegB+pPpgftv8JP7Mfsl7MV4D/WvyA6Hb14yfn5XOTf0f8nstZ+j/3G2TYM3puds3uG+c/+j/gPgK/kH9Q/1nYQ9ET9jD0H5iPiUYENB2qcPIgRS3TgtIhkMB8tziKSpD/NnHpjEbZNj5/l5IVBr52SG/xyjzkJTnMUC6yolt9lLgk5Wwbl1/CqIAAD++b0wz0jMPAzCVNTA9n3vareiQRRS8wZ0Xlilprk8NY0H/+sOHJTvKEZYGIp//xz3j/WEPvMfIeZypa5KEzXQFLc4H3eXqAVbiEfJnAYSvxqOsPiRCHI7tGkers76UuuKD15gG37XdxG3QdX+Fh8gkwXfj3gKRtwx9TIoyq1acT387w/tUQb9Kwrm6t+nM0ZZNjgrUK4gxz339q8PEsUctFPfwgsDYKTb/bge/hpCdHotM11VXiHaakMtM+wsKC8RrrngiHv03t3q588H/W30hYCbmY3pDwWeUs5P0HQqENkbf7VA2saTNxGt2y+vGlmoU6Ff+jy7XFx8AAoP9xgfSLuvu5Csd3IYtkLImOgcFfX8X43MAG0m6aE6PS4Igrcn6clAu6pqIkUVnF7U3s7NiJMjG39u/8goub5kzNPWb5ocXX2Z54Lqk/obRQOOoCg6yqUcYAuI3pZqCq4N0os/0K6E5kuDSocHe0XeREY4UicDeRRMeIGoj7yeH5GtAm7fbJPBKPTIh/I/Q6CFof7W1pz43DflCdFD1NikSPr7hphspWwrVNX/ogJw+TrsdOhCjxkyKbNJDQKfyvPBuaaeRGzdnliR/SodTfixtiTQmXWlDXXMWvoJvJj/9j83B7wRacSQUNNSbDQIVRJuIIdSVr2aDU1AVM35ndVt3lMOvML1jmNWCu/t8arEu3MNEIHJbsDhcSJTXazC/Sc6A6mKc5T95YoD+4EwZ8H3O+T9Wbz1j2a4nVKZacdO3RCYeziH+RUUrrzxtCXYomWUz7o0Qa65QWFUq/hxVT6e/yfz0eQuwOPLAS3kkaIKAaZ+bBMmb0YKj4QVDdSrzlrlVBHfHhzeX8GfwPUA6dxAZOyrmi62VlPjZLZIa/8dnyLQHKkI6O4vDBVvhllMwsNt+Q9i5O8czuAVM/W43YW5oNiMaXwzTAIsl/00v1UjdDxEmTGwSlE2k1/H/FsREq/vo+ixJIJQ+NCoNX7qdpUYjxAw3raU632v86tdh5ZfvH8bVla/b32rtdeP9Y7vagmf2fqqdi0EhZuL4rLcLGuaGKrzoKVL9k9cGxAReSMQv1J2+vY2V1Jl2Mgjm31Gu/DA48DYAcUlffHxN7PrerqLz9z2f1MBa7nFnQGQi5ZYsSNRQCe8RrZBbtOO9bC301vmr4K3dR3b48BBiJ0QR58UJCxe5yAbxTCgflrqZnYyC4iy/QcMITk5XI1NsVaQmH74Q7nk8EjfYhxbPZFD56N0fgfe+ExkwY06WKMzjCyrF1fXDVRRxwzASZXzbR3j19ot8OP1lX1E/+FPmvnD6lXXOTKYHVsaUt2nswAAcmn4Tn2gAAA=' }}
          style={styles.logo}
        />
        <Text style={styles.title}>Últimas noticias</Text>
      </View>

      {error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        posts.map((post, index) => (
          <View key={index} style={styles.postContainer}>
            {/* Aplicamos la función de decodificación */}
            <Text style={styles.postTitle}>{decodeHtmlEntities(post.title.rendered)}</Text>
            <Text style={styles.postDate}>
              {new Date(post.date).toLocaleDateString()}
            </Text>
            <Text
              style={styles.postLink}
              onPress={() => Linking.openURL(post.link)}>
              Leer más
            </Text>
          </View>
        ))
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#101820', // Fondo oscuro
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#FFFFFF', // Color del título
  },
  postContainer: {
    marginBottom: 20,
    padding: 16,
    backgroundColor: '#1D1F22', // Fondo para cada post
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF', // Color del título del post
  },
  postDate: {
    fontSize: 14,
    color: '#888',
    marginVertical: 4,
  },
  postLink: {
    fontSize: 16,
    color: '#1E90FF',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
});

export default WordPressNewsScreen;
