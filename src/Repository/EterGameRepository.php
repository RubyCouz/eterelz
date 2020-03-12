<?php

namespace App\Repository;

use App\Entity\EterGame;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method EterGame|null find($id, $lockMode = null, $lockVersion = null)
 * @method EterGame|null findOneBy(array $criteria, array $orderBy = null)
 * @method EterGame[]    findAll()
 * @method EterGame[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EterGameRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, EterGame::class);
    }

    // /**
    //  * @return EterGame[] Returns an array of EterGame objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('e.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?EterGame
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
